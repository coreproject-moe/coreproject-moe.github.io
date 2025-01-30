<script lang="ts">
	import { page } from "$app/stores";

	let { children } = $props();
</script>

<svelte:head>
	<title>CoreIcons - Beautifully crafted icon lib by @coreproject-team.</title>
</svelte:head>

<div class="relative h-dvh w-full overflow-y-scroll">
	<header
		class="bg-secondary/90 sticky top-0 z-10 container flex items-center justify-between px-3 py-4 backdrop-blur md:h-16 md:px-3 md:py-0"
	>
		<div class="flex items-center gap-2">
			<a aria-label="Logo" href="/">
				<coreicons-shape-logo class="flex size-7"> </coreicons-shape-logo>
			</a>
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
				<coreicons-logo-github class="flex size-5"> </coreicons-logo-github>
			</a>
		</nav>
	</header>
	<div class="flex flex-1 justify-center">
		<div class="w-full md:max-w-xl">
			{@render children()}
		</div>
	</div>
</div>
