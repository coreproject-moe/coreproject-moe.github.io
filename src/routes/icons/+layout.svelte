<script lang="ts">
	import { base } from "$app/paths";
	import Coreicons from "$lib/components/icons/coreicons.svelte";

	let { children } = $props();
</script>

<div class="relative h-dvh w-full overflow-y-scroll bg-secondary">
	<header
		class="container sticky top-0 z-10 flex items-center justify-between bg-secondary/90 backdrop-blur md:h-16 md:px-3 md:py-0 px-3 py-2"
	>
		<div class="flex items-center gap-2">
			<a href="{base}/icons">
				<coreproject-shape-logo class="w-7 pt-2"> </coreproject-shape-logo>
			</a>
			<Coreicons class="h-5 hidden md:flex" />
		</div>
		<nav class="flex items-center gap-4 md:gap-5">
			<a href="{base}/icons" class="text-accent">Icons</a>
			<!-- <a href="{base}/icons/usage">Usage</a> -->
			<a href="https://github.com/coreproject-moe/monorepo">
				<coreproject-logo-github class="size-5"> </coreproject-logo-github>
			</a>
		</nav>
	</header>
	<div class="flex flex-1 justify-center">
		<div class="max-w-xl">
			{@render children()}
		</div>
	</div>
</div>
