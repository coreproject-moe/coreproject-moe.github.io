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
	<a href="/" class="coreproject-icon">
		<Coreproject style="width: 8rem;" />
	</a>
	<nav>
		{@render right_nav?.()}
		<a href="https://github.com/coreproject-moe" target="_blank">
			<coreicons-logo-github></coreicons-logo-github>
			Github
		</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-inline: auto;
		position: fixed;
		z-index: 999;
		top: 0;
		inset-inline: 0;
		padding-inline: 2rem;
		height: var(--header-height);
		backdrop-filter: blur(0.5rem);
		background-color: color-mix(in srgb, var(--color-base-100) 90%, transparent);

		@media (width >= 40rem) {
			max-width: var(--header-width);
			padding-inline: 5rem;
		}

		.coreproject-icon {
			display: none;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			@media (width >= 40rem) {
				display: block;
			}
		}

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
