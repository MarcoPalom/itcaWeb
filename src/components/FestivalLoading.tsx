"use client"
import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/ThemeContext"

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
  const { isDark } = useTheme()

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
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      isDark ? "bg-black" : "bg-yellow-200"
    }`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${isDark ? "opacity-10" : "opacity-20"}`}>
        <div className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl animate-pulse ${
          isDark ? "bg-[#864e94]" : "bg-purple-300"
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full blur-2xl animate-pulse delay-1000 ${
          isDark ? "bg-[#864e94]" : "bg-pink-300"
        }`}></div>
        <div className={`absolute top-1/2 right-1/3 w-16 h-16 rounded-full blur-xl animate-pulse delay-500 ${
          isDark ? "bg-[#864e94]" : "bg-teal-300"
        }`}></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Festival Logo */}
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 relative animate-spin">
            <div className={`absolute inset-0 border-4 rounded-full ${
              isDark ? "border-gray-800" : "border-gray-300"
            }`}></div>
            <div className={`absolute inset-0 border-4 border-transparent rounded-full animate-spin ${
              isDark ? "border-t-[#864e94]" : "border-t-purple-500"
            }`}></div>
            <div className={`absolute inset-2 border-2 border-transparent rounded-full animate-spin ${
              isDark ? "border-b-[#864e94]" : "border-b-pink-500"
            }`} style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          
          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={isDark ? "/images/logos/logo.png" : "/images/logos/logol.png"}
              alt="Festival Logo"
              className={`w-10 h-10 md:w-12 md:h-12 animate-pulse ${
                isDark ? "filter brightness-0 invert" : ""
              }`}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <h2 className={`text-2xl md:text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          }`}>
            {message}
            <span className={isDark ? "text-[#864e94]" : "text-purple-500"}>{loadingDots}</span>
          </h2>
          
          {/* Progress Bar */}
          {showProgress && (
            <div className={`w-64 md:w-80 rounded-full h-2 overflow-hidden ${
              isDark ? "bg-gray-800" : "bg-gray-200"
            }`}>
              <div 
                className={`h-full rounded-full transition-all duration-300 ease-out ${
                  isDark 
                    ? "bg-gradient-to-r from-[#864e94] to-purple-400"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
        </div>

        {/* Floating Elements */}
        <div className={`absolute -top-8 -left-8 w-4 h-4 rounded-full animate-bounce delay-100 ${
          isDark ? "bg-[#864e94]" : "bg-purple-400"
        }`}></div>
        <div className={`absolute -bottom-8 -right-8 w-3 h-3 rounded-full animate-bounce delay-300 ${
          isDark ? "bg-[#864e94]" : "bg-pink-400"
        }`}></div>
        <div className={`absolute top-1/2 -left-12 w-2 h-2 rounded-full animate-bounce delay-500 ${
          isDark ? "bg-[#864e94]" : "bg-teal-400"
        }`}></div>
        <div className={`absolute top-1/2 -right-12 w-2 h-2 rounded-full animate-bounce delay-700 ${
          isDark ? "bg-[#864e94]" : "bg-purple-400"
        }`}></div>
      </div>

      {/* Butterfly Animation */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <div className={`w-8 h-8 rounded-full opacity-60 ${
          isDark 
            ? "bg-gradient-to-r from-[#864e94] to-purple-400"
            : "bg-gradient-to-r from-purple-400 to-pink-400"
        }`}></div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float-delayed">
        <div className={`w-6 h-6 rounded-full opacity-60 ${
          isDark 
            ? "bg-gradient-to-r from-purple-400 to-[#864e94]"
            : "bg-gradient-to-r from-pink-400 to-teal-400"
        }`}></div>
      </div>
    </div>
  )
}
