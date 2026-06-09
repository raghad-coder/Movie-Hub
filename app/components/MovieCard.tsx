// هنا بنعرف الـ Types بتاعة الـ Props اللي الكارت هيستقبلها
interface MovieCardProps {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
}

// ده Component منفصل ومحمي بالـ TypeScript
export default function MovieCard({ title, year, rating, genre }: MovieCardProps) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg hover:border-amber-400 transition-all">
      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-slate-900 px-2 py-1 rounded">
        {genre}
      </span>
      <h2 className="text-xl font-bold mt-3 text-slate-100">{title}</h2>
      <div className="flex justify-between items-center mt-4 text-sm text-slate-400">
        <span>السنة: {year}</span>
        <span className="text-amber-400 font-semibold">⭐ {rating}</span>
      </div>
    </div>
  );
}