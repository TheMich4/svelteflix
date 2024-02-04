<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';
	import type { View } from '$lib/views';

	export let movies: MovieListResult[];
	export let view: View;
	export let href: string | null;
</script>

<div class="column text-xl my-2">
	<span class="text-2xl font-semibold">{view.title}</span>
	{#if href}
		<a {href}>see all</a>
	{/if}
</div>

<div class="carousel">
	{#each movies as movie}
		<a href="/movies/{movie.id}" class="h-full">
			<img alt={movie.title} src={media(movie.poster_path, 500)} class="w-full" /></a
		>
	{/each}
</div>

<style>
	.carousel {
		--padding: max(var(--side), calc(var(--side) + (100vw - var(--column)) / 2));
		display: flex;
		height: clamp(10rem, 25vw, 20rem);
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
		scroll-padding-left: var(--padding);
		padding: 0 var(--padding);
		gap: 1rem;
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	a {
		aspect-ratio: 2/3;
		color: var(--accent);
		height: 100%;
	}
</style>
