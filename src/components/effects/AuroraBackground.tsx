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
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0.5, 0.5));

  // Sync scroll progress
  useEffect(() => {
    if (uniformsRef.current) {
      uniformsRef.current.uScroll.value = safeNum(scrollProgress);
    }
  }, [scrollProgress]);

  // Mouse Interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = 1.0 - e.clientY / window.innerHeight;
      
      if (uniformsRef.current) {
        // Smoothly interpolate mouse position in shader if needed, 
        // but direct assignment is fine for general background ambient
        uniformsRef.current.uMouse.value.copy(mouseRef.current);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false }); // Antialias false for performance
    renderer.setSize(width, height);
    // Limit pixel ratio for performance on high-DPI screens
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Enhanced Shader ---
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

      // --- Noise Functions ---
      // 2D Random
      float random(in vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      // 2D Noise
      float noise(in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        // Cubic Hermite Interpolation
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      // Fractal Brownian Motion (FBM)
      #define OCTAVES 5
      float fbm(in vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 0.0;
        
        // Rotate to reduce grid artifacts
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));

        for (int i = 0; i < OCTAVES; i++) {
          value += amplitude * noise(st);
          st = rot * st * 2.0 + vec2(100.0); // Shift to avoid center artifacts
          amplitude *= 0.5;
        }
        return value;
      }

      // --- Aurora Logic ---
      void main() {
        vec2 st = vUv;
        st.x *= uResolution.x / uResolution.y;

        float time = uTime * 0.15; // Slower base time
        
        // Mouse Influence (Subtle warp)
        vec2 mouseOffset = (uMouse - 0.5) * 0.2;
        
        // Coordinates for FBM
        // Distort the coordinates to create "curtains"
        vec2 q = vec2(0.);
        q.x = fbm( st + 0.00 * time + mouseOffset);
        q.y = fbm( st + vec2(1.0));

        vec2 r = vec2(0.);
        // Add flow movement
        r.x = fbm( st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * time );
        r.y = fbm( st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * time);

        float f = fbm(st + r + mouseOffset * 0.5);

        // --- Color Palette ---
        // Deep space background mix
        vec3 color = vec3(0.0, 0.0, 0.05);

        // Mix colors based on FBM value (f) and coordinate (q)
        // Emerald Green
        vec3 c1 = vec3(0.1, 0.9, 0.6); 
        // Deep Purple
        vec3 c2 = vec3(0.6, 0.1, 0.9);
        // Magenta/Pink (Highlights)
        vec3 c3 = vec3(0.9, 0.2, 0.5);
        // Cyan/Blue
        vec3 c4 = vec3(0.1, 0.5, 0.9);

        // Mix logic
        float mix1 = smoothstep(0.2, 0.7, f);
        float mix2 = smoothstep(0.4, 0.9, length(q));
        float mix3 = smoothstep(0.0, 1.0, r.x);

        vec3 auroraColor = mix(c1, c2, mix1);
        auroraColor = mix(auroraColor, c3, mix2 * 0.6);
        auroraColor = mix(auroraColor, c4, st.y * 0.5); // Fade to blue at bottom

        // Scroll influence: shift towards red/warm
        float scrollMix = clamp(uScroll * 1.2, 0.0, 1.0);
        vec3 warmColor = vec3(1.0, 0.3, 0.2);
        auroraColor = mix(auroraColor, warmColor, scrollMix * 0.4);

        // Alpha Masking (Curtain shape)
        // Create vertical streaks
        float alpha = f * 1.8; 
        alpha *= smoothstep(0.0, 0.3, vUv.y); // Fade in from bottom
        alpha *= smoothstep(1.0, 0.6, vUv.y); // Fade out at top
        
        // Add glow core
        color = mix(color, auroraColor, clamp(alpha, 0.0, 1.0));
        
        // Add extra "shine"
        color += c3 * pow(f, 3.0) * 0.4;

        gl_FragColor = vec4(color, 1.0);
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
      depthWrite: false,
      depthTest: false,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // --- Stars (Separate System) ---
    const starGeo = new THREE.BufferGeometry();
    const starCount = 600;
    const posArray = new Float32Array(starCount * 3);
    const sizeArray = new Float32Array(starCount);
    
    for (let i = 0; i < starCount; i++) {
      // Random spread
      posArray[i * 3] = (Math.random() - 0.5) * 4;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 4;
      posArray[i * 3 + 2] = -1.0; // Background layer
      
      // Random size
      sizeArray[i] = Math.random();
    }
    
    starGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    starGeo.setAttribute("aSize", new THREE.BufferAttribute(sizeArray, 1));

    const starMat = new THREE.ShaderMaterial({
        uniforms: {
            uTime: uniforms.uTime,
        },
        vertexShader: `
            attribute float aSize;
            varying float vAlpha;
            uniform float uTime;
            void main() {
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mvPosition;
                gl_PointSize = aSize * 2.5; // Base size
                
                // Twinkle effect
                float twinkle = sin(uTime * 2.0 + position.x * 10.0 + position.y * 5.0);
                vAlpha = 0.5 + 0.5 * twinkle;
            }
        `,
        fragmentShader: `
            varying float vAlpha;
            void main() {
                // Circular particle
                vec2 coord = gl_PointCoord - vec2(0.5);
                if(length(coord) > 0.5) discard;
                
                gl_FragColor = vec4(1.0, 1.0, 1.0, vAlpha * 0.8);
            }
        `,
        transparent: true,
        depthWrite: false,
    });

    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      uniforms.uTime.value += 0.005; // Slower, smoother time step
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
      window.removeEventListener("mousemove", handleMouseMove);
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
