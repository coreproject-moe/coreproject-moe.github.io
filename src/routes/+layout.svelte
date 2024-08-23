<script lang="ts">
	import { defineCustomElements } from "@coreproject-moe/icons/loader";
	import { onMount } from "svelte";

	console.log(icons);
	onMount(() => {
		defineCustomElements(window);
	});
</script>

<slot />
