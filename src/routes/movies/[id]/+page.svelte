<script lang="ts">
	import Carousel from '$lib/components/carousel.svelte';
	import Hero from './hero.svelte';

	export let data;

	$: details = [
		{
			label: 'Released',
			value: data.movie.release_date
		},
		{
			label: 'Runtime',
			value: `${data.movie.runtime} minutes`
		},
		{
			label: 'Budget',
			value: `${data.movie.budget / 1e6}M`
		},
		{
			label: 'Revenue',
			value: `${data.movie.revenue / 1e6}M`
		},
		{
			label: 'Genre',
			value: data.movie.genres.map((genre) => genre.name).join(', ')
		}
	];
</script>

<Hero movie={data.movie} />

<div class="column grid margin-8 gap-4 md:grid-cols-2">
	{#if data.trailer}
		<iframe
			class="aspect-video w-full"
			src="https://www.youtube.com/embed/{data.trailer.key}"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	{/if}

	<dl class="grid gap-4 items-baseline">
		{#each details as details}
			<dt class="uppercase opacity-80 text-sm">{details.label}</dt>
			<dd>{details.value}</dd>
		{/each}
	</dl>
</div>

{#if data.movie.recommendations.results.length > 0}
	<Carousel
		movies={data.movie.recommendations.results}
		href={null}
		view={{ title: 'You might also like...', endpoint: '' }}
	/>
{/if}

<style>
	.grid {
		grid-template-columns: max-content 1fr;
	}
</style>
