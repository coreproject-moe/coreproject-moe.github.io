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
		flex: 1;
		display: flex;
		flex-direction: column;
		max-width: 85rem;
		margin: auto;
		position: relative;
	}
</style>
