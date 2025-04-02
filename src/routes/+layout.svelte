<script lang="ts">
	import "../styles/global.css";
	import { defineCustomElements } from "@coreproject-moe/icons/loader";
	let { children } = $props();

	$effect.pre(() => {
		defineCustomElements(globalThis.window);
	});
</script>

<main class="container">
	{@render children()}
</main>

<style>
	.container {
		padding: 0.5rem;
	}
</style>
