import Layout from '../components/Layout';
import MovieList from '../components/MovieList';

const { API_KEY } = process.env;

export async function get(req, res, next) {
  const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const popularMoviesData = await popularMoviesResponse.json();
  res.locals.popularMovies = popularMoviesData.results;
  next();
};

export default function Home({ popularMovies}) {
  return (
    <Layout title="Islandy Movies">
      <MovieList popularMovies={popularMovies} />
    </Layout>
  );
};
