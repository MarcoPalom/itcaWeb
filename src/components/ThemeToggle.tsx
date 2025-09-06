"use client"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 ease-in-out
        ${isDark 
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400 hover:text-yellow-300' 
          : 'bg-yellow-400 hover:bg-yellow-300 text-gray-800 hover:text-gray-900'
        }
        shadow-lg hover:shadow-xl transform hover:scale-105
        border-2 ${isDark ? 'border-gray-600' : 'border-yellow-500'}
      `}
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      title={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}
