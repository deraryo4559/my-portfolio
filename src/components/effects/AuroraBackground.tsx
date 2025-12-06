import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const safeNum = (val: number, fallback = 0) => {
  if (typeof val !== 'number' || isNaN(val) || !isFinite(val)) return fallback;
  return val;
};

const AuroraBackground = ({ scrollProgress }: { scrollProgress: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniformsRef = useRef<any>(null);
  const animationIdRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

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
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Shader for Realistic Aurora with FBM ---
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
      uniform vec2 uMouse;
      varying vec2 vUv;

      // Simplex 2D noise
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

      // FBM (Fractal Brownian Motion) for more detail
      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 3; i++) {
          value += amplitude * snoise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = vUv;
        uv.x *= uResolution.x / uResolution.y; // Correct aspect ratio

        float t = uTime * 0.15;
        
        // Interactive mouse influence
        vec2 mouseEffect = (uMouse - 0.5) * 0.2;
        
        // Coordinates for aurora layers
        vec2 st = uv;
        st.x += st.y * 0.1; // Slight tilt
        
        // Layer 1: Large, slow moving waves (Green/Base)
        float n1 = fbm(vec2(st.x * 1.5 + t * 0.5 + mouseEffect.x, st.y * 0.5 - t * 0.2));
        
        // Layer 2: Detailed, faster streaks (Purple/Detail)
        float n2 = fbm(vec2(st.x * 3.0 - t * 0.8 - mouseEffect.x, st.y * 2.0 + t * 0.3));
        
        // Combine noises to create "curtain" effect
        float auroraShape = n1 * 0.6 + n2 * 0.4;
        
        // Sharpen the shape to define rays
        float rays = smoothstep(0.2, 0.8, auroraShape);
        
        // Vertical fade for bottom and top
        float fade = smoothstep(0.0, 0.3, uv.y) * smoothstep(1.0, 0.6, uv.y);
        
        // Intensity modulation by scroll
        float scrollMod = 1.0 + uScroll * 0.5;
        
        float finalAlpha = rays * fade * 0.7 * scrollMod;

        // Color Palette (Deep Space -> Emerald -> Magenta/Purple)
        vec3 colorBg = vec3(0.0, 0.02, 0.05); // Deep Space Blue/Black
        vec3 color1 = vec3(0.0, 0.8, 0.6);    // Emerald Green
        vec3 color2 = vec3(0.6, 0.0, 0.8);    // Deep Purple
        vec3 color3 = vec3(1.0, 0.2, 0.6);    // Magenta (High intensity)

        // Mixing colors based on noise value and vertical position
        vec3 auroraColor = mix(color1, color2, uv.y * 1.2 + n1 * 0.5);
        auroraColor = mix(auroraColor, color3, smoothstep(0.6, 1.0, n2));
        
        // Scroll effect shifts hue slightly towards red/warm
        auroraColor = mix(auroraColor, vec3(1.0, 0.3, 0.3), uScroll * 0.3);

        // Add "stars" or noise grain for texture
        float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
        auroraColor += grain * 0.03;

        // Composition
        vec3 finalColor = mix(colorBg, auroraColor, finalAlpha);
        
        // Glow boost
        finalColor += auroraColor * finalAlpha * 0.3;

        gl_FragColor = vec4(finalColor, 1.0); // Background is opaque to cover previous elements
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    };
    uniformsRef.current = uniforms;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: false, // Opaque to serve as full background
      depthWrite: false,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // --- Star Field (Foreground Layer) ---
    const starGeo = new THREE.BufferGeometry();
    const starCount = 600;
    const posArray = new Float32Array(starCount * 3);
    const sizesArray = new Float32Array(starCount);
    
    for(let i=0; i<starCount; i++) {
        posArray[i*3] = (Math.random() - 0.5) * 4; 
        posArray[i*3+1] = (Math.random() - 0.5) * 4;
        posArray[i*3+2] = 0.1; // Slightly in front of background
        sizesArray[i] = Math.random();
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    starGeo.setAttribute('size', new THREE.BufferAttribute(sizesArray, 1));

    const starMat = new THREE.PointsMaterial({
      size: 0.008,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });
    
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // --- Animation ---
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      // Smooth mouse interpolation
      uniforms.uMouse.value.x += (mouseRef.current.x - uniforms.uMouse.value.x) * 0.05;
      uniforms.uMouse.value.y += (mouseRef.current.y - uniforms.uMouse.value.y) * 0.05;
      
      uniforms.uTime.value += 0.01;
      
      // Subtle star movement
      stars.rotation.z += 0.0002;

      renderer.render(scene, camera);
    };
    animate();

    // --- Event Listeners ---
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = 1.0 - (e.clientY / window.innerHeight); // Invert Y for GLSL
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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

  return <div ref={containerRef} className="fixed inset-0 z-0 bg-black pointer-events-none" />;
};

export default AuroraBackground;
