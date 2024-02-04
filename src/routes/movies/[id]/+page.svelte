<script lang="ts">
	import Hero from './hero.svelte';

	export let data;
</script>

<Hero movie={data.movie} />
