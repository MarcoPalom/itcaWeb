import { motion } from "framer-motion";

interface AgendaCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    date: string;
    time: string;
    image: string;
    category: string;
  };
  type?: 'current' | 'next' | 'preview';
  onClick?: () => void;
}

export default function AgendaCard({ item, type = 'current', onClick }: AgendaCardProps) {
  // type: 'current' | 'next' | 'preview'
  return (
    <motion.div
      className={
        type === 'current'
          ? "relative h-80 bg-white border border-neutral-200 shadow-xl rounded-2xl overflow-hidden group"
          : type === 'next'
          ? "h-80 bg-gradient-to-br from-orange-200/90 to-amber-200/90 border border-orange-300 flex flex-col justify-between p-6 rounded-2xl cursor-pointer hover:from-orange-300/90 hover:to-amber-300/90 transition-all duration-300"
          : ""
      }
      onClick={onClick}
      whileHover={type === 'next' ? { scale: 1.03 } : {}}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {type === 'current' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-100/80 to-transparent z-10"></div>
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <span className="bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-medium">
              {item.category}
            </span>
          </div>
        </>
      )}
      {type === 'next' && (
        <>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-neutral-900 text-lg font-bold leading-tight">{item.name}</h3>
              <span className="bg-white/40 text-neutral-900 px-2 py-1 rounded text-xs">Siguiente</span>
            </div>
            <p className="text-neutral-800 text-sm mb-4 leading-relaxed line-clamp-3">{item.description}</p>
            <div className="space-y-1">
              <div className="flex items-center text-neutral-600 text-xs">
                <span className="font-medium mr-2">Fecha:</span>
                <span>{item.date}</span>
              </div>
              <div className="flex items-center text-neutral-600 text-xs">
                <span className="font-medium mr-2">Horario:</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="bg-amber-400/80 text-black px-3 py-1 rounded-full text-xs font-medium">
              {item.category}
            </span>
            <span className="text-neutral-900">→</span>
          </div>
        </>
      )}
    </motion.div>
  );
} 