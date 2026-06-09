import MovieCard from "./components/MovieCard";

// 1. بنعرف شكل البيانات اللي راجعة من الـ API
interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
}

// 2. الفانكشن دي بتجيب البيانات من الـ API مباشرة على السيرفر (Server-Side Fetching)
// دي الحركة اللي بتعجب أي Tech Lead في الإنترفيو لأنها بتوفر useEffect و useState كتير!
async function getMovies(): Promise<Movie[]> {
  // ده API وهمي ومجاني مجهز للتعليم
  const res = await fetch("https://api.jsonbin.io/v3/b/66183a64ad194d651d62df5e", {
    next: { revalidate: 3600 } // مفهوم الـ ISR: الكاش هيتحدث كل ساعة (سؤال إنترفيو متقدم!)
  });
  
  if (!res.ok) {
    throw new Error("فشل في تحميل البيانات");
  }
  
  const data = await res.json();
  return data.record; 
}

// خدي بالك حطينا async قبل الـ Component (ميزة حصرية للـ Server Components)
export default async function HomePage() {
  const movies = await getMovies();

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-amber-400">🎬 Movie Hub</h1>
        <p className="text-slate-400 mt-2">بيانات حقيقية قادمة من الـ API مباشرة للسيرفر!</p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          // بنستخدم الـ Component اللي عملناه وبنباصي له البيانات (Props)
          <MovieCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            genre={movie.genre}
          />
        ))}
      </div>
    </main>
  );
}