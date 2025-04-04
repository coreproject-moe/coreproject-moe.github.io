<script lang="ts">
	import { given_icon_name_return_html_string } from "$lib/utils/icons";
	import { bigram_search, linear_search } from "$lib/utils/search";
	import { toasts_store } from "$lib/components/ui/toast/toast.svelte";
	import { browser } from "$app/environment";
	import Header from "$lib/components/header.svelte";

	type Icon = { "icon-name": string; type: string; variants?: string[] };

	let icons_json = $state<Icon[] | null>(null);
	let icons = $state<Icon[] | null>(null);

	$effect.pre(() => {
		import("$lib/icons.json", {
			assert: { type: "json" }
		}).then((res) => {
			const data = res.default;

			icons_json = structuredClone(data);
			icons = structuredClone(data);
		});
	});

	function handle_input(event: Event) {
		if (icons_json == null) return;

		const target = event.target as HTMLInputElement;
		const value = target.value;

		if (value.length === 0) {
			icons = icons_json;
		} else if (value.length === 1) {
			icons = linear_search(icons_json, value);
		} else if (value.length > 1) {
			icons = bigram_search(icons_json, value);
		}
	}

	async function copy_icon(icon: string) {
		if (!browser) return;
		await navigator.clipboard.writeText(icon);
		toasts_store.send("Icon copied!", icon);
	}
</script>

<svelte:head>
	<title>CoreIcons - Beautifully crafted icon lib.</title>
</svelte:head>

<Header />
<main class="icons-page">
	<div class="icons-page__nav">
		<a href="/">
			<coreicons-shape-chevron variant="left"></coreicons-shape-chevron>
			Home
		</a>
		<a href="https://github.com/coreproject-moe/monorepo/tree/main/packages/icons" target="_blank">
			Usage
			<coreicons-shape-chevron variant="right"></coreicons-shape-chevron>
		</a>
	</div>
	<div class="icons-page__header">
		<div class="icons-page__header-title">
			<span>CoreIcons.</span>
			<span>Beautifully crafted.</span>
		</div>
		<p class="icons-page__header-subtext">
			Fully customizable SVG icons, open-sourced under the MIT license, and created by
			<a rel="noopener noreferrer" target="_blank" href="https://github.com/coreproject-moe">
				@coreproject-team
			</a>.
		</p>
	</div>
	<div class="icons-page__search">
		<coreicons-shape-search class="icons-page__search-icon"></coreicons-shape-search>
		<input
			placeholder="Search icons..."
			oninput={(event) => {
				event.preventDefault();
				handle_input(event);
			}}
		/>
	</div>
	<div class="icons-page__grid">
		{#if icons}
			{#each icons.toSorted((a, b) => a["icon-name"].localeCompare(b["icon-name"])) as item}
				{@const icon = item["icon-name"]}
				{@const variants = item.variants}
				{@const icon_type = item.type}

				{#if variants}
					{#each variants as it}
						{@const _icon = given_icon_name_return_html_string({
							icon_name: icon,
							icon_type: icon_type,
							classname: "icon",
							variant: it
						})}

						<button onclick={() => copy_icon(_icon)}>
							{@html _icon}
						</button>
					{/each}
				{:else}
					{@const _icon = given_icon_name_return_html_string({
						icon_name: icon,
						icon_type: icon_type,
						classname: "icon"
					})}

					<button onclick={() => copy_icon(_icon)}>
						{@html _icon}
					</button>
				{/if}
			{/each}
		{/if}
	</div>
	<footer class="icons-page__footer">
		<span>
			Made with ❤️ by
			<a
				href="https://github.com/coreproject-moe"
				class="icons-page__footer-link"
				target="_blank"
				rel="noopener">CoreProject Team</a
			>.
		</span>
		<span>Under the MIT license.</span>
	</footer>
</main>

<style lang="scss">
	.icons-page {
		margin-top: var(--header-height);
		max-width: 35rem;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;

		&__nav {
			display: flex;
			align-items: center;
			justify-content: space-between;

			a {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				color: var(--color-info);
			}
		}

		&__header {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 0.5rem;

			&-title {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				font-size: 3rem;
				font-weight: bold;
				line-height: 1;
				color: var(--color-info);

				:first-child {
					color: var(--color-accent);
				}
			}

			&-subtext {
				color: color-mix(in srgb, var(--color-info) 75%, transparent);

				a {
					color: var(--color-info);
					font-weight: 600;
				}
			}
		}

		&__search {
			display: flex;
			align-items: center;
			position: relative;
			width: 100%;
			height: 3rem;
			border: 2px solid var(--color-neutral);
			border-radius: 0.75rem;
			transition: 0.3s ease-out;

			&:focus-within {
				border-color: var(--color-info);

				&-icon {
					opacity: 100%;
				}
			}

			&-icon {
				position: absolute;
				left: 1rem;
				pointer-events: none;
				color: var(--color-info);
				opacity: 75%;
				transition: 0.3s ease-out;
			}

			input {
				padding-left: 2.5rem;
				background-color: transparent;
				outline: none;
				flex: 1;
			}
		}

		&__grid {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			gap: 0.5rem;

			@media (width >= 40rem) {
				grid-template-columns: repeat(8, 1fr);
			}

			button {
				aspect-ratio: 1/1;
				border-radius: 0.75rem;
				display: grid;
				place-items: center;
				transition: background-color 0.5s ease-out 0.3s;

				&:hover {
					background-color: color-mix(in srgb, var(--color-neutral) 50%, transparent);
					transition: background-color 0.1s ease-out;
				}

				:global(.icon) {
					color: var(--color-info);
					width: 1.25rem;
					height: 1.25rem;
				}
			}
		}

		&__footer {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 0.75rem;
			color: color-mix(in srgb, var(--color-info) 75%, transparent);

			a {
				color: var(--color-info);
				font-weight: 600;
			}
		}
	}
</style>
