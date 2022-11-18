import Layout from '../../components/Layout';
import PersonDetails from '../../components/PersonDetails';

const { API_KEY } = process.env;

function calculateAge(birthday) {
	const ageDifMs = Date.now() - birthday;
	const ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export async function get(req, res, next) {
  const { id } = req.params;
	const profileUrl = `https://api.themoviedb.org/3/person/${id}?append_to_response=external_ids,combined_credits&api_key=${API_KEY}`;

	const profileResponse = await fetch(profileUrl);
	const profileData = await profileResponse.json();
	const person = {
			...profileData,
			profile_path: profileData.profile_path
					? 'https://image.tmdb.org/t/p/w300/' + profileData.profile_path
					: 'https://via.placeholder.com/300x450',
			birthday: new Date(profileData.birthday).toLocaleDateString('en-us', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
			}),
			age: calculateAge(new Date(profileData.birthday))
	}

	const castMovies = profileData.combined_credits.cast || []

	const knownFor = castMovies.sort((a, b) => b.popularity - a.popularity).slice(0, 5).map(movie => {
		const title = movie.title || movie.name || 'Untitled';

		return {
			...movie,
			title,
			poster_path: movie.poster_path
				? 'https://image.tmdb.org/t/p/w185/' + movie.poster_path
				: 'https://via.placeholder.com/185x278',
			linkToPage: movie.media_type === 'movie'
				? `/movies/${movie.id}`
				: `/tv/${movie.id}`
		}
	})

	const social = profileData.external_ids
	const credits = castMovies.map(movie => {
		const title = movie.title || movie.name || 'Untitled';
		const release_date = movie.release_date || movie.first_air_date || '';

		return {
			...movie,
			title,
			release_date,
			release_year: release_date ? release_date.split('-')[0] : 'Future',
			linkToPage: movie.media_type === 'movie'
				? `/movies/${movie.id}`
				: `/tv/${movie.id}`
		}
	}).sort((a, b) => new Date(b.release_date) - new Date(a.release_date))

  res.locals = { person, social, credits, knownFor };
  next();
};

export default function Movie({ person, social, credits, knownFor }) {
  return (
    <Layout title="People - Islandy Movies">
      <PersonDetails
				person={person}
				social={social}
				credits={credits}
				knownFor={knownFor}
			/>
    </Layout>
  );
};
