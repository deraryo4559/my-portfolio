import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const SnowEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // シーンのセットアップ
    const scene = new THREE.Scene()
    // 背景を少し暗くするためのフォグ（オプション）
    scene.fog = new THREE.FogExp2(0x000000, 0.002)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000
    )
    camera.position.z = 1000

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // 雪のパーティクル作成
    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = 2000 // 雪の量

    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 2000 - 1000     // x
      positions[i * 3 + 1] = Math.random() * 2000 - 1000 // y
      positions[i * 3 + 2] = Math.random() * 2000 - 1000 // z

      velocities[i * 3] = (Math.random() - 0.5) * 2      // x速度（風）
      velocities[i * 3 + 1] = -(Math.random() * 3 + 2)   // y速度（落下）
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 2  // z速度
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )

    // 雪のテクスチャ生成（プログラムで円を描画）
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const context = canvas.getContext('2d')
    if (context) {
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      context.fillStyle = gradient
      context.fillRect(0, 0, 32, 32)
    }
    const texture = new THREE.CanvasTexture(canvas)

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 6,
      map: texture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // アニメーション
    let animationId: number
    let time = 0

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.01

      const positions = particlesGeometry.attributes.position.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        // 位置の更新
        positions[i * 3] += velocities[i * 3] + Math.sin(time + i) * 0.1 // X: 少し揺らす
        positions[i * 3 + 1] += velocities[i * 3 + 1] // Y: 落下
        positions[i * 3 + 2] += velocities[i * 3 + 2] // Z

        // 画面外に出たら上に戻す
        if (positions[i * 3 + 1] < -1000) {
          positions[i * 3 + 1] = 1000
          positions[i * 3] = Math.random() * 2000 - 1000
          positions[i * 3 + 2] = Math.random() * 2000 - 1000
        }
        // 横にはみ出しすぎた場合
        if (positions[i * 3] < -1000 || positions[i * 3] > 1000) {
          positions[i * 3] = -positions[i * 3]
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true
      
      // カメラを少し動かして立体感を出す
      camera.position.x += (Math.sin(time * 0.1) * 10 - camera.position.x) * 0.05
      camera.position.y += (Math.cos(time * 0.1) * 10 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // リサイズ処理
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      // メモリ解放
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      texture.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export default SnowEffect

