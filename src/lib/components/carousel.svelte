<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';
	import type { View } from '$lib/views';

	export let movies: MovieListResult[];
	export let view: View;
	export let href: string | null;
</script>

<div class="column text-xl">
	{view.title}
	{#if href}
		<a {href}>see all</a>
	{/if}
</div>

<div class="carousel flex h-40 gap-4 overflow-x-scroll snap-mandatory">
	{#each movies as movie}
		<a href="/movies/{movie.id}" class="h-full">
			<img alt={movie.title} src={media(movie.poster_path, 500)} class="h-full" /></a
		>
	{/each}
</div>

<style>
	.carousel {
		--padding: max(var(--side), calc(var(--side) + (100vw - var(--column)) / 2));
		scroll-padding-left: var(--padding);
		padding: 0 var(--padding);
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	a {
		aspect-ratio: 2/3;
	}
</style>
