"use client"
import { useState, useEffect } from "react"

interface UseFestivalLoadingOptions {
  initialDelay?: number
  minLoadingTime?: number
  onComplete?: () => void
}

export function useFestivalLoading(options: UseFestivalLoadingOptions = {}) {
  const { 
    initialDelay = 0, 
    minLoadingTime = 1000, 
    onComplete 
  } = options

  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState("Cargando el Festival...")

  useEffect(() => {
    const startTime = Date.now()
    
    // Initial delay
    const initialTimer = setTimeout(() => {
      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 200)

      // Update loading messages
      const messages = [
        "Cargando el Festival...",
        "Preparando artistas...",
        "Cargando eventos...",
        "Finalizando..."
      ]
      
      let messageIndex = 0
      const messageInterval = setInterval(() => {
        if (messageIndex < messages.length - 1) {
          messageIndex++
          setMessage(messages[messageIndex])
        }
      }, 800)

      // Complete loading
      const completeTimer = setTimeout(() => {
        const elapsedTime = Date.now() - startTime
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime)
        
        setTimeout(() => {
          setIsLoading(false)
          onComplete?.()
          clearInterval(progressInterval)
          clearInterval(messageInterval)
        }, remainingTime)
      }, 3000)

      return () => {
        clearTimeout(completeTimer)
        clearInterval(progressInterval)
        clearInterval(messageInterval)
      }
    }, initialDelay)

    return () => clearTimeout(initialTimer)
  }, [initialDelay, minLoadingTime, onComplete])

  const startLoading = (customMessage?: string) => {
    setIsLoading(true)
    setProgress(0)
    if (customMessage) {
      setMessage(customMessage)
    }
  }

  const stopLoading = () => {
    setIsLoading(false)
    setProgress(100)
  }

  return {
    isLoading,
    progress,
    message,
    startLoading,
    stopLoading,
    setMessage
  }
}
