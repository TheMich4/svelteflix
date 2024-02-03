<script lang="ts">
	import ResultsPage from '$lib/components/results-page.svelte';

	export let data;
</script>

<div class="column">
	<h1 class="text-4xl font-bold mb-4">{data.title}</h1>

	<ResultsPage
		movies={data.movies}
		next={data.nextPage ? `/movies/${data.view}?page=${data.nextPage}` : null}
	/>
</div>
