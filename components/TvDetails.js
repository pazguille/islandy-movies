export default function TvDetails({ show }) {
  return (
    <>
      <div class="tv-info border-b border-gray-800">
        <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
          <div class="flex-none">
            <img src={show.poster_path} alt={show.name} class="movie-poster w-64 lg:w-96" id="movie-poster" />
          </div>
          <div class="md:ml-24">
            <h2 class="text-4xl mt-4 md:mt-0 font-semibold">{show.name}</h2>
            <div class="flex flex-wrap items-center text-gray-400 text-sm">
              <svg class="fill-current text-lime-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"/></g></svg>
              <span class="ml-1">{show.vote_average}</span>
              <span class="mx-2">|</span>
              <span>{show.first_air_date}</span>
              <span class="mx-2">|</span>
              <span>{show.genres}</span>
            </div>

            <p class="text-gray-300 mt-8">
              {show.overview}
            </p>

            <div class="mt-12">
              <div class="flex mt-4">
                {show.created_by.map(crew => (
                  <div class="mr-8">
                    <div>{crew.name}</div>
                    <div class="text-gray-400 text-sm">Creator</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tv-cast border-b border-gray-800">
        <div class="container mx-auto px-4 py-16">
          <h2 class="text-4xl font-semibold">Cast</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {show.cast.map(cast => (
              <div class="mt-8">
                <a href={`/people/${cast.id}`}>
                  <img id={`person-photo-${cast.id}`} src={cast.profile_path} alt={cast.name} class="thumbnail hover:opacity-75 transition ease-in-out duration-150" />
                </a>
                <div class="mt-2">
                  <a href={`/people/${cast.id}`} class="text-lg mt-2 hover:text-gray:300">{cast.name}</a>
                  <div class="text-sm text-gray-400">
                    {cast.character}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="tv-images">
        <div class="container mx-auto px-4 py-16">
          <h2 class="text-4xl font-semibold">Images</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {show.images.map(image => (
              <div class="mt-8">
                <img src={`https://image.tmdb.org/t/p/w500${image.file_path}`} loading="lazy" alt={show.name} class="hover:opacity-75 transition ease-in-out duration-150" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
