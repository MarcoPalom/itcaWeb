"use client"
import { useState, useEffect } from "react"

interface FestivalLoadingProps {
  message?: string
  showProgress?: boolean
  progress?: number
}

export default function FestivalLoading({ 
  message = "Cargando el Festival...", 
  showProgress = false,
  progress = 0 
}: FestivalLoadingProps) {
  const [loadingDots, setLoadingDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots(prev => {
        if (prev === "...") return ""
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#864e94] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#864e94] rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#864e94] rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Festival Logo */}
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 relative animate-spin">
            <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[#864e94] rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-transparent border-b-[#864e94] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          
          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/logos/logo.png"
              alt="Festival Logo"
              className="w-10 h-10 md:w-12 md:h-12 animate-pulse"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {message}
            <span className="text-[#864e94]">{loadingDots}</span>
          </h2>
          
          {/* Progress Bar */}
          {showProgress && (
            <div className="w-64 md:w-80 bg-gray-800 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#864e94] to-purple-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-8 -left-8 w-4 h-4 bg-[#864e94] rounded-full animate-bounce delay-100"></div>
        <div className="absolute -bottom-8 -right-8 w-3 h-3 bg-[#864e94] rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 -left-12 w-2 h-2 bg-[#864e94] rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 -right-12 w-2 h-2 bg-[#864e94] rounded-full animate-bounce delay-700"></div>
      </div>

      {/* Butterfly Animation */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <div className="w-8 h-8 bg-gradient-to-r from-[#864e94] to-purple-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float-delayed">
        <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-[#864e94] rounded-full opacity-60"></div>
      </div>
    </div>
  )
}
