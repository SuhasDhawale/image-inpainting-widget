'use client'

import React, { useRef, useEffect, useState } from 'react'

interface CanvasProps {
  image: string
  brushSize: number
  onMaskUpdate: (maskImage: string) => void
}

export const Canvas: React.FC<CanvasProps> = ({ image, brushSize, onMaskUpdate }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      const img = new Image()
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        
        // Create a separate canvas for the mask
        const maskCanvas = document.createElement('canvas')
        maskCanvas.width = img.width
        maskCanvas.height = img.height
        const maskCtx = maskCanvas.getContext('2d')
        if (maskCtx) {
          maskCtx.fillStyle = 'black'
          maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height)
        }
      }
      img.src = image
    }
  }, [image])

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    draw(event)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    const canvas = canvasRef.current
    if (canvas) {
      const maskCanvas = document.createElement('canvas')
      maskCanvas.width = canvas.width
      maskCanvas.height = canvas.height
      const maskCtx = maskCanvas.getContext('2d')
      if (maskCtx) {
        maskCtx.drawImage(canvas, 0, 0)
        const imageData = maskCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height)
        for (let i = 0; i < imageData.data.length; i += 4) {
          const avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3
          imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = avg > 128 ? 255 : 0
        }
        maskCtx.putImageData(imageData, 0, 0)
        onMaskUpdate(maskCanvas.toDataURL())
      }
    }
  }

  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      onMouseLeave={stopDrawing}
      className="border border-gray-300"
    />
  )
}

