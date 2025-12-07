import { useEffect, useRef } from "react";
import * as THREE from "three";

const safeNum = (val: number, fallback = 0) => {
  if (typeof val !== "number" || isNaN(val) || !isFinite(val)) return fallback;
  return val;
};

const AuroraBackground = ({ scrollProgress }: { scrollProgress: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const uniformsRef = useRef<any>(null);
  const animationIdRef = useRef<number>(0);

  // Sync scroll progress with shader uniform
  useEffect(() => {
    if (uniformsRef.current) {
      uniformsRef.current.uScroll.value = safeNum(scrollProgress);
    }
  }, [scrollProgress]);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Init Three.js ---
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();

    // Orthographic Camera for full-screen shader effect (simplifies UV mapping for background)
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Shader for Realistic Aurora ---
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform float uScroll;
      uniform vec2 uResolution;
      varying vec2 vUv;

      // 2D Simplex Noise
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Aurora function
      float aurora(vec2 uv, float time) {
        // Stretch noise on X to create vertical rays
        vec2 coord = uv;
        coord.x *= 0.3; // Broad horizontal variation
        
        // Add vertical wavy motion
        float n = snoise(vec2(coord.x * 20.0 + time * 0.1, coord.y * 0.5 - time * 0.05));
        
        // Add detail streaks (High frequency X, Low Y)
        float streaks = snoise(vec2(coord.x * 50.0 + time * 0.2, coord.y * 0.2));
        
        // Combine
        float combined = n * 0.6 + streaks * 0.4;
        
        // Sharpen to create rays
        float rays = smoothstep(0.0, 0.6, combined);
        
        // Vertical fade (bottom and top)
        float verticalFade = smoothstep(0.0, 0.4, uv.y) * smoothstep(1.0, 0.6, uv.y);
        
        return rays * verticalFade;
      }

      void main() {
        vec2 uv = vUv;
        
        // Correct aspect ratio for noise to look consistent
        uv.x *= uResolution.x / uResolution.y;

        float time = uTime * 0.2;
        
        // Layer 1
        float a1 = aurora(vec2(uv.x, uv.y + snoise(vec2(uv.x * 0.5, time*0.1))*0.2), time);
        // Layer 2 (Offset)
        float a2 = aurora(vec2(uv.x + 5.0, uv.y * 0.9 + 0.1), time * 0.8 + 10.0);
        
        float intensity = max(a1, a2);

        // Colors
        // Bright Green (Bottom) -> Deep Purple (Top)
        vec3 colBottom = vec3(0.1, 1.0, 0.5); // Neon Green
        vec3 colTop = vec3(0.5, 0.0, 1.0);    // Deep Purple
        
        // Vertical Color Gradient
        // Mix based on Y position mostly, but influenced by intensity for that "glow"
        vec3 baseColor = mix(colBottom, colTop, uv.y * 1.2 - 0.2);
        
        // Scroll Effect: Shift to Red
        vec3 colRed = vec3(1.0, 0.1, 0.1);
        float scrollMix = clamp(uScroll * 1.5, 0.0, 1.0);
        
        vec3 finalColor = mix(baseColor, colRed, scrollMix * 0.8); // Don't go fully red, keep some structure
        
        // Add white core to brightest parts
        finalColor += vec3(0.2) * smoothstep(0.5, 1.0, intensity);

        gl_FragColor = vec4(finalColor, intensity * 0.8);
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
    };
    uniformsRef.current = uniforms;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Stars (Separate System)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 400;
    const posArray = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 4; // Spread across view
      // Push stars back
      if (i % 3 === 2) posArray[i] = -1.0;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      uniforms.uTime.value += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationIdRef.current);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 bg-black pointer-events-none"
    />
  );
};

export default AuroraBackground;
