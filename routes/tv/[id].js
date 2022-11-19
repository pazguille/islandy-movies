import Layout from '../../components/Layout';
import TvDetails from '../../components/TvDetails';

const { API_KEY } = process.env;

export async function get(req, res, next) {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/tv/${id}?append_to_response=credits,videos,images&api_key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  const show = {
    ...data,
    poster_path: data.poster_path
      ? 'https://image.tmdb.org/t/p/w500/' + data.poster_path
      : 'https://via.placeholder.com/500x750',
    vote_average: (data.vote_average * 10).toFixed(2) + '%',
    first_air_date: new Date(data.first_air_date).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    genres: data.genres.map(g => g.name).join(', '),
    cast: data.credits.cast.slice(0,5).map(c => ({
      ...c,
      profile_path: c.profile_path
        ? 'https://image.tmdb.org/t/p/w300/' + c.profile_path
        : 'https://via.placeholder.com/300x450'
    })),
    images: data.images.backdrops.slice(0, 9),
  };

  res.locals.show = show;
  next();
};

export default function Show({ show }) {
  return (
    <Layout title="Islandy Movies - TV">
      <TvDetails show={show} />
    </Layout>
  );
};
