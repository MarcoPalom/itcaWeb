"use client"
import { useEffect } from "react"

interface ImagePreloaderProps {
  images: string[]
  onLoad?: () => void
  onError?: (error: string) => void
}

export default function ImagePreloader({ images, onLoad, onError }: ImagePreloaderProps) {
  useEffect(() => {
    let loadedCount = 0
    const totalImages = images.length

    if (totalImages === 0) {
      onLoad?.()
      return
    }

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
        img.src = src
      })
    }

    const preloadAllImages = async () => {
      try {
        await Promise.all(images.map(preloadImage))
        onLoad?.()
      } catch (error) {
        onError?.(error instanceof Error ? error.message : 'Unknown error')
      }
    }

    preloadAllImages()
  }, [images, onLoad, onError])

  return null
}
