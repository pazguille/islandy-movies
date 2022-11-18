import Layout from '../../components/Layout';
import TvList from '../../components/TvList';

const { API_KEY } = process.env;

export async function get(req, res, next) {
	const popularShowsResponse = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
	const popularShowsData = await popularShowsResponse.json();
	const popularShows = popularShowsData.results;

	const topRatedResponse = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`);
	const topRatedData = await topRatedResponse.json();
	const topRated = topRatedData.results;

	res.locals = { popularShows, topRated };
  next();
};

export default function Series({ popularShows, topRated}) {
  return (
    <Layout title="TV - Islandy Movies">
      <TvList popularShows={popularShows} topRated={topRated} />
    </Layout>
  );
};
