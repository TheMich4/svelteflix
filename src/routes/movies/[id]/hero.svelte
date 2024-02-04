<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;

	$: backdrop =
		movie.images.backdrops.find((image) => !image.iso_639_1) ?? movie.images.backdrops[0];
</script>

<div class="hero grid bg-black">
	<div class="backdrop w-full">
		<img alt={movie.title} src={media(backdrop.file_path, 1280)} />
	</div>

	<div class="info flex flex-col -mt-16 gap-4">
		<h1 class="text-4xl font-bold">{movie.title}</h1>
		<p>{movie.overview}</p>
	</div>
</div>

<style>
	.backdrop::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 8rem;
		background: linear-gradient(to top, black, transparent);
		left: 0;
		bottom: 0;
	}

	.info {
		padding: 0 var(--side);
	}

	.info h1,
	.info p {
		margin: 0;
	}

	@media (min-width: 60rem) {
		.hero {
			grid-template-columns: 1fr 60rem;
			grid-auto-rows: auto;
		}

		.backdrop {
			grid-column: 2/3;
		}

		.backdrop::after {
			width: 15rem;
			height: 100%;
			left: 0;
			bottom: 0;
			background: linear-gradient(to right, black, transparent);
		}

		.info {
			position: absolute;
			justify-content: center;
			top: 0;
			left: 0;
			width: 40em;
			height: 100%;
			grid-column: 1/2;
			margin-top: 0;
			filter: drop-shadow(0 0 0.5rem black);
		}
	}
</style>
