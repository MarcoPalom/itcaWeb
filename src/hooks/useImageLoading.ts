"use client"
import { useState, useEffect, useCallback } from "react"

interface UseImageLoadingOptions {
  images: string[]
  preloadCount?: number
  onAllLoaded?: () => void
  onError?: (error: string) => void
}

export function useImageLoading({
  images,
  preloadCount = 3,
  onAllLoaded,
  onError,
}: UseImageLoadingOptions) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set())
  const [errors, setErrors] = useState<Map<string, string>>(new Map())
  const [isLoading, setIsLoading] = useState(true)

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, src]))
        setLoadingImages(prev => {
          const newSet = new Set(prev)
          newSet.delete(src)
          return newSet
        })
        resolve()
      }
      
      img.onerror = () => {
        const error = `Failed to load image: ${src}`
        setErrors(prev => new Map([...prev, [src, error]]))
        setLoadingImages(prev => {
          const newSet = new Set(prev)
          newSet.delete(src)
          return newSet
        })
        onError?.(error)
        reject(new Error(error))
      }
      
      setLoadingImages(prev => new Set([...prev, src]))
      img.src = src
    })
  }, [onError])

  const preloadImages = useCallback(async () => {
    if (images.length === 0) {
      setIsLoading(false)
      onAllLoaded?.()
      return
    }

    setIsLoading(true)
    setLoadedImages(new Set())
    setErrors(new Map())

    try {
      // Preload solo las primeras N imágenes para mejorar la experiencia
      const imagesToPreload = images.slice(0, preloadCount)
      await Promise.all(imagesToPreload.map(preloadImage))
      
      // Cargar el resto de forma lazy
      const remainingImages = images.slice(preloadCount)
      remainingImages.forEach(src => {
        // Usar Intersection Observer para lazy loading
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                preloadImage(src)
                observer.unobserve(entry.target)
              }
            })
          },
          { rootMargin: '50px' }
        )

        // Crear un elemento invisible para observar
        const placeholder = document.createElement('div')
        placeholder.style.position = 'absolute'
        placeholder.style.top = '-1000px'
        placeholder.style.left = '-1000px'
        placeholder.style.width = '1px'
        placeholder.style.height = '1px'
        document.body.appendChild(placeholder)
        observer.observe(placeholder)

        // Cleanup
        return () => {
          observer.disconnect()
          document.body.removeChild(placeholder)
        }
      })

      setIsLoading(false)
      onAllLoaded?.()
    } catch (error) {
      setIsLoading(false)
      onError?.(error instanceof Error ? error.message : 'Unknown error')
    }
  }, [images, preloadCount, preloadImage, onAllLoaded, onError])

  useEffect(() => {
    preloadImages()
  }, [preloadImages])

  const isImageLoaded = useCallback((src: string) => {
    return loadedImages.has(src)
  }, [loadedImages])

  const isImageLoading = useCallback((src: string) => {
    return loadingImages.has(src)
  }, [loadingImages])

  const getImageError = useCallback((src: string) => {
    return errors.get(src)
  }, [errors])

  return {
    isLoading,
    loadedImages: Array.from(loadedImages),
    loadingImages: Array.from(loadingImages),
    errors: Array.from(errors.entries()),
    isImageLoaded,
    isImageLoading,
    getImageError,
    preloadImage,
  }
}
