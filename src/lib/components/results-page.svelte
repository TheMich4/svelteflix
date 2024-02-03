<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';

	export let movies: MovieListResult[];
	export let next: string | null;
</script>

<div class="grid grid-cols-4 w-full gap-4">
	{#each movies as movie}
		<a href="/movies/{movie.id}" class="w-full aspect-[2/3]">
			<img alt="movie.title" src={media(movie.poster_path, 500)} class="w-full" /></a
		>
	{/each}
</div>
