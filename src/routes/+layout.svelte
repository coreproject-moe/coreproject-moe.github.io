<script lang="ts">
	import Toaster from "$lib/components/ui/toast/toaster.svelte";
	import "../styles/global.scss";
	import { defineCustomElements } from "@coreproject-moe/icons/loader";
	let { children } = $props();

	$effect.pre(() => {
		defineCustomElements(globalThis.window);
	});
</script>

{@render children()}
<!-- toaster -->
<Toaster />
