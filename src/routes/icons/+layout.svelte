<script lang="ts">
	import { page } from "$app/state";
	import Header from "$lib/components/header.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<title>CoreIcons - Beautifully crafted icon lib.</title>
</svelte:head>

<Header />
<div class="icons-container">
	<div class="links">
		<a href="/icons" class:disabled={page.url.pathname === "/icons"}>
			<coreicons-shape-chevron variant="left"></coreicons-shape-chevron>
			Icons
		</a>
		<a href="/icons/usage" class:disabled={page.url.pathname === "/icons/usage"}>
			Usage
			<coreicons-shape-chevron variant="right"></coreicons-shape-chevron>
		</a>
	</div>
	{@render children()}
</div>

<style>
	.icons-container {
		margin-top: var(--header-height);
		max-width: 35rem;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.links {
			display: flex;
			align-items: center;
			justify-content: space-between;

			a {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				color: var(--color-info);

				&.disabled {
					opacity: 50%;
					pointer-events: none;
					user-select: none;
				}
			}
		}
	}
</style>
