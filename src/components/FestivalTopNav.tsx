"use client";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const FestivalTopNav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  const navItems = [
    { href: "/", label: "Festival" },
    { href: "/artistas-nacionales", label: "Artistas Nacionales" },
    { href: "/artistas-internacionales", label: "Artistas Internacionales" },
    { href: "/artistas-tamaulipecos", label: "Artistas Tamaulipecos" },
    { href: "/carteleras", label: "Municipios" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl shadow-lg ${
        isDark 
          ? "bg-black/90 border-b border-gray-800/50" 
          : "bg-white/90 border-b border-gray-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-16 space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-8 h-8"
            >
              <Image
                src={isDark ? "/images/logos/logo.png" : "/images/logos/logol.png"}
                alt="FICSM 2025"
                fill
                sizes="64px"
                priority
                className={`object-contain ${
                  isDark ? "filter brightness-0 invert" : ""
                }`}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href === "/" && pathname === "/") ||
                (item.href === "/artistas-nacionales" && pathname.startsWith("/artistas/")) ||
                (item.href === "/tamaulipecos-artists" && pathname.startsWith("/tamaulipeco/")) ||
                (item.href === "/carteleras" && pathname.startsWith("/municipios/"));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-purple-400"
                      : isDark 
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Theme Toggle Switch */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                isDark 
                  ? "bg-gray-600 focus:ring-offset-black" 
                  : "bg-gray-300 focus:ring-offset-white"
              }`}
            >
              <span
                className={`${
                  isDark ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                {isDark ? (
                  <Moon className="h-3 w-3 text-gray-300 ml-1" />
                ) : (
                  <Sun className="h-3 w-3 text-yellow-400 mr-1" />
                )}
              </div>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors ${
                isDark 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-gray-800/50 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href === "/" && pathname === "/") ||
                    (item.href === "/artistas-nacionales" && pathname.startsWith("/artistas/")) ||
                    (item.href === "/tamaulipecos-artists" && pathname.startsWith("/tamaulipeco/")) ||
                    (item.href === "/carteleras" && pathname.startsWith("/municipios/"));
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                        isActive
                          ? "text-purple-400"
                          : isDark 
                            ? "text-gray-300 hover:text-white hover:bg-gray-800/30"
                            : "text-gray-700 hover:text-black hover:bg-gray-100/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                
                {/* Theme Toggle in Mobile Menu */}
                <div className="px-3 py-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                      isDark 
                        ? "bg-gray-600 focus:ring-offset-black" 
                        : "bg-gray-300 focus:ring-offset-white"
                    }`}
                  >
                    <span
                      className={`${
                        isDark ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {isDark ? (
                        <Moon className="h-3 w-3 text-gray-300 ml-1" />
                      ) : (
                        <Sun className="h-3 w-3 text-yellow-400 mr-1" />
                      )}
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default FestivalTopNav;
