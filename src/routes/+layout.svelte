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
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		padding-inline: 5rem;
	}
</style>
