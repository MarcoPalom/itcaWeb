import { Facebook, Instagram, Twitter } from "lucide-react";

export default function AgendaHeader() {
  return (
    <header className="relative z-20 px-6 py-4 bg-transparent">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left side - Agenda and Social */}
        <div className="flex items-center space-x-6">
          <span className="text-neutral-700 text-sm font-medium">AGENDA</span>
          <div className="flex space-x-3">
            <Facebook className="w-5 h-5 text-neutral-700 hover:text-orange-400 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-neutral-700 hover:text-orange-400 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-neutral-700 hover:text-orange-400 cursor-pointer transition-colors" />
          </div>
        </div>
        {/* Right side - Language Options */}
        <div className="flex space-x-4">
          <button className="text-neutral-700 hover:text-orange-400 text-sm transition-colors">English</button>
          <button className="text-neutral-700 hover:text-orange-400 text-sm transition-colors">Español</button>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mt-2">
        <div className="flex items-center space-x-2 text-neutral-400 text-sm">
          <span>Accueil</span>
          <span>/</span>
          <span className="text-neutral-700">Agenda</span>
        </div>
      </div>
    </header>
  );
} 