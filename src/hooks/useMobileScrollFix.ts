"use client"
import { useEffect } from 'react'

export function useMobileScrollFix() {
  useEffect(() => {
    // Prevent default touch behaviors that can cause scroll issues
    const preventDefault = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }

    // Add touch event listeners
    document.addEventListener('touchstart', preventDefault, { passive: false })
    document.addEventListener('touchmove', preventDefault, { passive: false })

    // Cleanup
    return () => {
      document.removeEventListener('touchstart', preventDefault)
      document.removeEventListener('touchmove', preventDefault)
    }
  }, [])
}
