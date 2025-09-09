"use client"
import { cn } from "@/lib/utils"

interface SkeletonLoaderProps {
  className?: string
  variant?: "default" | "circular" | "rectangular"
  animation?: "pulse" | "wave" | "none"
  width?: string | number
  height?: string | number
}

export default function SkeletonLoader({
  className,
  variant = "default",
  animation = "pulse",
  width,
  height,
}: SkeletonLoaderProps) {
  const baseClasses = "bg-gray-200 dark:bg-gray-700"
  
  const variantClasses = {
    default: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-none",
  }

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-wave",
    none: "",
  }

  const style = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && { height: typeof height === "number" ? `${height}px` : height }),
  }

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={style}
    />
  )
}

// Componentes específicos para diferentes tipos de contenido
export function ArtistCardSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 min-h-[120px] md:min-h-[150px]">
      <SkeletonLoader
        variant="rectangular"
        width="80px"
        height="112px"
        className="md:w-24 md:h-36"
      />
      <div className="flex-1 space-y-3">
        <SkeletonLoader width="60%" height="20px" />
        <SkeletonLoader width="40%" height="16px" />
        <SkeletonLoader width="30%" height="14px" />
        <div className="flex justify-between items-center">
          <SkeletonLoader width="80px" height="16px" />
          <SkeletonLoader width="60px" height="14px" />
        </div>
      </div>
    </div>
  )
}

export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <SkeletonLoader
        variant="rectangular"
        className="w-full h-full"
        animation="pulse"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export function GridSkeleton({ 
  items = 6, 
  className 
}: { 
  items?: number
  className?: string 
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="space-y-3">
          <SkeletonLoader
            variant="rectangular"
            height="200px"
            className="w-full"
          />
          <SkeletonLoader width="80%" height="20px" />
          <SkeletonLoader width="60%" height="16px" />
        </div>
      ))}
    </div>
  )
}
