<script lang="ts">
	import * as api from '$lib/api';
	import ResultsPage from '$lib/components/results-page.svelte';

	export let data;

	let appending = false;
</script>

<div class="column flex flex-col h-full">
	<h1 class="text-4xl font-bold mb-4">{data.title}</h1>

	<ResultsPage
		movies={data.movies}
		next={data.nextPage ? `/movies/${data.view}?page=${data.nextPage}` : null}
		on:end={async () => {
			if (!data.nextPage || appending) return;

			const next = await api.get(fetch, data.endpoint, { page: String(data.nextPage) });

			data.movies = [...data.movies, ...next.results];
			data.nextPage = next.page < next.totalPages ? next.page + 1 : null;
		}}
	/>
</div>
