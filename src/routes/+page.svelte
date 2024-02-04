<script lang="ts">
	import Carousel from '$lib/components/carousel.svelte';
	import { views } from '$lib/views';
	import Hero from './hero.svelte';

	export let data;
</script>

<h1 class="text-4xl column mb-4 font-bold">Top trending movies</h1>

<Hero movie={data.featured} />

<Carousel movies={data.trending.results} view={views.trending} href="/movies/trending" />
<Carousel movies={data.nowPlaying.results} view={views.now_playing} href="/movies/now_playing" />
<Carousel movies={data.upcoming.results} view={views.upcoming} href="/movies/upcoming" />
