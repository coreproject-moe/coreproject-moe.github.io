<script lang="ts">
	import "../styles/global.css";
	import { defineCustomElements } from "@coreproject-moe/icons/loader";
	let { children } = $props();

	$effect.pre(() => {
		defineCustomElements(globalThis.window);
	});
</script>

{@render children()}
