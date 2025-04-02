<script lang="ts">
	import Coreproject from "$lib/components/icons/coreproject.svelte";
	import type { Snippet } from "svelte";

	interface Props {
		right_nav?: Snippet;
	}

	const { right_nav }: Props = $props();
</script>

<header>
	<nav>
		<span>Products <coreicons-shape-chevron variant="down"></coreicons-shape-chevron></span>
		<span class="disabled">Blog</span>
	</nav>
	<Coreproject style="width: 8rem; position: absolute; left: 50%; transform: translateX(-50%);" />
	<nav>
		{#if right_nav}
			{@render right_nav()}
		{:else}
			<a href="https://github.com/coreproject-moe" target="_blank">
				<coreicons-logo-github></coreicons-logo-github>
				Github
			</a>
		{/if}
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		position: fixed;
		top: 0;
		inset-inline: 0;
		padding-inline: 5rem;
		height: var(--header-height);
		backdrop-filter: blur(0.5rem);
		background-color: color-mix(in srgb, var(--color-base-100) 50%, transparent);

		nav {
			display: flex;
			align-items: center;
			gap: 2rem;
			color: var(--color-info);
			font-weight: 600;

			& * {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				cursor: pointer;
				user-select: none;
			}
		}
	}
</style>
