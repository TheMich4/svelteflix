<script lang="ts">
	import Carousel from '$lib/components/carousel.svelte';
	import Hero from './hero.svelte';

	export let data;
</script>

<h1 class="text-4xl column mb-4 font-bold">Top trending movies</h1>

<Hero movie={data.featured} />

<Carousel movies={data.trending.results} />
<Carousel movies={data.nowPlaying.results} />
<Carousel movies={data.upcoming.results} />
