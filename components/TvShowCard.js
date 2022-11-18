export default function TvShowCard({ show, loading }) {
  return (
    <div class="mt-8">
      <a href={`/tv/${show.id}`}>
        <img width="224" height="336" loading={loading} src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={`${show.name} Poster`} class="thumbnail hover:opacity-75 transition ease-in-out duration-150" id={`movie-poster-${show.id}`} />
      </a>
      <div class="mt-2">
        <a href={`/tv/${show.id}`} class="text-lg mt-2 hover:text-gray-300">{show.name}</a>
        <div class="flex items-center text-gray-400 text-sm mt-1">
          <svg class="fill-current text-lime-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"/></g></svg>
          <span class="ml-1">{show.vote_average}</span>
          <span class="mx-2">|</span>
          <span>{show.first_air_date}</span>
        </div>
        <div class="text-gray-400 text-sm">{show.genres}</div>
      </div>
    </div>
  );
}
