import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopNav() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section1Height = window.innerHeight * 2; // 200vh
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < section1Height);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="w-full flex items-center justify-between px-8 fixed top-0 left-0 z-20"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease-out, visibility 0.3s ease-out',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <img className="w-20 h-20" src="/logo.svg" alt="ITCA Web" />
      <div className="flex gap-6">
        <Link href="/" className="text-white hover:text-blue-200 transition-colors">Inicio</Link>
        <Link href="/about" className="text-white hover:text-blue-200 transition-colors">Acerca</Link>
      </div>
    </nav>
  );
}
