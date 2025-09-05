"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface IconPosition {
  id: string;
  src: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
}

const iconFiles = [
  "icon-07.png",
  "icon-08.png", 
  "icon-09.png",
  "icon-10.png",
  "icon-12.png",
  "icon-13.png",
  "icon-14.png",
  "icon-15.png",
  "icon-16.png"
];

const colors = [
  "#FF6B9D", // Pink
  "#9B59B6", // Purple
  "#F39C12", // Orange
  "#E74C3C", // Red
  "#2ECC71", // Green
  "#3498DB", // Blue
  "#F1C40F", // Yellow
  "#1ABC9C", // Teal
  "#E67E22", // Orange-red
  "#8E44AD", // Dark purple
  "#27AE60", // Dark green
  "#2980B9", // Dark blue
];

export default function FestivalBackground() {
  const { isDark } = useTheme();
  const [icons, setIcons] = useState<IconPosition[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const generateIcons = () => {
      const newIcons: IconPosition[] = [];
      const iconCount = Math.floor((dimensions.width * dimensions.height) / 8000); // Density based on screen size

      for (let i = 0; i < iconCount; i++) {
        const iconFile = iconFiles[Math.floor(Math.random() * iconFiles.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        newIcons.push({
          id: `icon-${i}`,
          src: `/images/icons/${iconFile}`,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.8, // Scale between 0.5 and 1.3
          opacity: 0.6 + Math.random() * 0.4 // Opacity between 0.6 and 1.0
        });
      }

      setIcons(newIcons);
    };

    generateIcons();
  }, [dimensions]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ 
        background: isDark 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #ffd940 0%, #ffed4e 100%)',
        zIndex: -1 
      }}
    >
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute transition-all duration-1000 ease-out"
          style={{
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            transform: `rotate(${icon.rotation}deg) scale(${icon.scale})`,
            opacity: icon.opacity,
            filter: isDark 
              ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            width: '24px',
            height: '24px',
          }}
        >
          <img
            src={icon.src}
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter: `hue-rotate(${Math.random() * 360}deg) saturate(1.2) brightness(1.1)`,
            }}
          />
        </div>
      ))}
      
             {/* Center Logo */}
       <div className="absolute inset-0 flex items-center justify-center">
         <div className="relative">
           <img
             src="/images/logos/logo.png"
             alt="Festival Logo"
             className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain "
             style={{
               filter: isDark 
                 ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
                 : 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
             }}
           />
         </div>
       </div>

       {/* Additional decorative elements */}
       <div className="absolute inset-0">
         {/* Subtle gradient overlays for depth */}
         <div 
           className="absolute inset-0 opacity-20"
           style={{
             background: isDark
               ? 'radial-gradient(circle at 20% 80%, rgba(255, 107, 157, 0.3) 0%, transparent 50%)'
               : 'radial-gradient(circle at 20% 80%, rgba(255, 107, 157, 0.1) 0%, transparent 50%)'
           }}
         />
         <div 
           className="absolute inset-0 opacity-15"
           style={{
             background: isDark
               ? 'radial-gradient(circle at 80% 20%, rgba(155, 89, 182, 0.3) 0%, transparent 50%)'
               : 'radial-gradient(circle at 80% 20%, rgba(155, 89, 182, 0.1) 0%, transparent 50%)'
           }}
         />
         <div 
           className="absolute inset-0 opacity-10"
           style={{
             background: isDark
               ? 'radial-gradient(circle at 40% 40%, rgba(46, 204, 113, 0.3) 0%, transparent 50%)'
               : 'radial-gradient(circle at 40% 40%, rgba(46, 204, 113, 0.1) 0%, transparent 50%)'
           }}
         />
       </div>
    </div>
  );
}
