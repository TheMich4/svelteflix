<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;

	$: images = movie.images;
	$: backdrop = images.backdrops.find((image) => !image.iso_639_1) ?? images.backdrops[0];
	$: logo = images.logos.find((image) => image.iso_639_1 === 'en') ?? images.logos[0];
</script>

<a href="/movies/{movie.id}" class="flex column">
	<img
		alt={movie.title}
		src={media(backdrop.file_path, 1280)}
		class="w-full"
		style="aspect-ration: {backdrop.aspect_ratio}"
	/>

	<img
		alt={movie.title}
		src={media(logo.file_path, 1280)}
		class="absolute left-4 top-4 h-100 w-[30%] object-contain drop-shadow-lg"
		style="aspect-ration: {logo.aspect_ratio}"
	/>
</a>
