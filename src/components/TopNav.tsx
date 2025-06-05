import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md mb-8">
      <div className="font-bold text-xl text-blue-700">ITCA Web</div>
      <div className="flex gap-6">
        <Link href="/">Inicio</Link>
        <Link href="/about">Acerca</Link>
      </div>
    </nav>
  );
} 