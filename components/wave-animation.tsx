"use client"

import { useEffect, useRef } from "react"

export default function WaveAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 200

    let time = 0

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // First wave
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let i = 0; i < canvas.width; i++) {
        const x = i
        const y = Math.sin(i * 0.003 + time) * 20 + canvas.height / 2
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()

      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient1.addColorStop(0, "rgba(59, 130, 246, 0.2)")
      gradient1.addColorStop(0.5, "rgba(147, 51, 234, 0.2)")
      gradient1.addColorStop(1, "rgba(59, 130, 246, 0.2)")

      ctx.fillStyle = gradient1
      ctx.fill()

      // Second wave
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let i = 0; i < canvas.width; i++) {
        const x = i
        const y = Math.sin(i * 0.002 + time + 2) * 25 + canvas.height / 2 + 10
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()

      const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient2.addColorStop(0, "rgba(147, 51, 234, 0.1)")
      gradient2.addColorStop(0.5, "rgba(59, 130, 246, 0.1)")
      gradient2.addColorStop(1, "rgba(147, 51, 234, 0.1)")

      ctx.fillStyle = gradient2
      ctx.fill()

      // Third wave
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let i = 0; i < canvas.width; i++) {
        const x = i
        const y = Math.sin(i * 0.004 + time * 1.5) * 15 + canvas.height / 2 - 10
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()

      const gradient3 = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient3.addColorStop(0, "rgba(59, 130, 246, 0.15)")
      gradient3.addColorStop(0.5, "rgba(236, 72, 153, 0.15)")
      gradient3.addColorStop(1, "rgba(59, 130, 246, 0.15)")

      ctx.fillStyle = gradient3
      ctx.fill()

      time += 0.01
      requestAnimationFrame(drawWave)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = 200
    }

    drawWave()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
