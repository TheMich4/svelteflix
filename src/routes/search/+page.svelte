<script lang="ts">
	import ResultsPage from '$lib/components/results-page.svelte';

	export let data;
</script>

<div class="column">
	<h1 class="text-4xl font-bold mb-4">Search</h1>

	<form>
		<input
			name="query"
			value={data.query}
			autocomplete="off"
			spellcheck="false"
			class="text-2xl bg-white/10 border-0 rounded-md text-white mb-4 w-full p-4"
		/>
	</form>

	{#if data.query}
		<ResultsPage movies={data.movies} next={null} />
	{/if}
</div>

<style>
	input:focus-visible {
		outline: 2px solid var(--accent);
	}
</style>
