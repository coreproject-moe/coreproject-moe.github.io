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
		padding-inline: 5rem;
	}
</style>
