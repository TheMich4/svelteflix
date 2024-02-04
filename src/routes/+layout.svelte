<script>
	import { page } from '$app/stores';

	import '../styles.css';
	import logo from '$lib/images/logo.svg';
	import tmdb from '$lib/images/tmdb.svg';
</script>

<nav class="flex w-full h-12 items-center justify-between">
	<a href="/"><img alt="Svelteflix" src={logo} class="h-4" /></a>

	<div class="flex gap-4">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Login</a>
	</div>
</nav>

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer class="flex justify-center h-16">
	<p>
		Data provided by
		<a href="https://www.themoviedb.org"><img alt="The Movie DB" src={tmdb} /></a>
	</p>
</footer>

<style>
	main.infinite {
		height: 0;
		flex: 1;
		overflow: hidden;
	}

	nav {
		max-width: var(--column);
		padding: 0 var(--side);
		color: var(--accent);
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
