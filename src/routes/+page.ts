import type { MovieDetails, MovieList } from '$lib/types';
import * as api from '$lib/api';

export async function load({ fetch }) {
	const trending = (await api.get(fetch, 'trending/movie/day')) as Promise<MovieList>;
	const featured = (await api.get(fetch, `movie/${(await trending).results[0].id}`, {
		append_to_response: 'images'
	})) as Promise<MovieDetails>;

	return { trending, featured };
}
