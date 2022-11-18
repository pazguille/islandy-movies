import MovieCard from './MovieCard';

export default function MovieList({ popularMovies }) {
  return (
    <div class="container mx-auto px-4 pt-16 mb-16">
        <div class="popular-movies">
            <h2 class="uppercase tracking-wider text-lime-500 text-lg font-semibold">Popular Movies</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {popularMovies.map((movie, i) => (
                <MovieCard movie={movie} loading={i < 5 ? 'eager' : 'lazy'} />
              ))}
            </div>
        </div>
    </div>
  );
};
