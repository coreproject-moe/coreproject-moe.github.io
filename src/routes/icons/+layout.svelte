<script lang="ts">
	import Coreicons from "$lib/components/icons/coreicons.svelte";
	import { page } from "$app/stores";

	let { children } = $props();
</script>

<div class="relative h-dvh w-full overflow-y-scroll bg-secondary">
	<header
		class="container sticky top-0 z-10 flex items-center justify-between bg-secondary/90 px-3 py-4 backdrop-blur md:h-16 md:px-3 md:py-0"
	>
		<div class="flex items-center gap-2">
			<a aria-label="Logo" href="/">
				<coreproject-shape-logo class="flex size-7"> </coreproject-shape-logo>
			</a>
			<Coreicons class="hidden h-5 md:flex" />
		</div>
		<nav class="flex items-center gap-4 md:gap-5">
			{#each Object.entries({ icons: "/icons", usage: "/icons/usage" }) as item}
				<a
					href={item[1]}
					class="capitalize transition-colors"
					class:text-accent={$page.url.pathname === item[1]}>{item[0]}</a
				>
			{/each}
			<a aria-label="Github" href="https://github.com/coreproject-moe/monorepo">
				<coreproject-logo-github class="flex size-5"> </coreproject-logo-github>
			</a>
		</nav>
	</header>
	<div class="flex flex-1 justify-center">
		<div class="w-full md:max-w-xl">
			{@render children()}
		</div>
	</div>
</div>
