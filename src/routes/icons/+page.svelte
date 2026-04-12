<script lang="ts">
	import { given_icon_name_return_html_string } from "$lib/utils/icons";
	import { bigram_search, linear_search } from "$lib/utils/search";
	import { toasts_store } from "$lib/components/ui/toast/toast.svelte";
	import { browser } from "$app/environment";
	import Header from "$lib/components/header.svelte";
	import icons_data from "$lib/icons.json";

	type Icon = { "icon-name": string; type: string; variants?: string[] };

	const icons_json: Icon[] = icons_data as Icon[];
	let icons = $state<Icon[]>(structuredClone(icons_json));
	let query = $state("");

	$effect(() => {
		if (query.length === 0) icons = icons_json;
		else if (query.length === 1) icons = linear_search(icons_json, query);
		else icons = bigram_search(icons_json, query);
	});

	function resolve_icon(icon: string, type: string, variant?: string) {
		return given_icon_name_return_html_string({
			icon_name: icon,
			icon_type: type,
			classname: "icon",
			variant
		});
	}

	async function copy_icon(raw: string) {
		if (!browser) return;
		const svg = raw.replace(/\sclass="[^"]*"/i, "");
		await navigator.clipboard.writeText(svg);
		toasts_store.send("Icon copied!", svg);
	}

	const sorted = $derived(icons.toSorted((a, b) => a["icon-name"].localeCompare(b["icon-name"])));
</script>

<svelte:head>
	<title>CoreIcons - Beautifully crafted icon lib.</title>
</svelte:head>

<Header />

<main>
	<nav>
		<a href="/">
			<coreicons-shape-chevron variant="left"></coreicons-shape-chevron>
			Home
		</a>
		<a
			href="https://github.com/coreproject-moe/monorepo/blob/main/packages/icons/README.md"
			target="_blank"
		>
			Usage
			<coreicons-shape-chevron variant="right"></coreicons-shape-chevron>
		</a>
	</nav>

	<header>
		<hgroup>
			<span>CoreIcons.</span>
			<span>Beautifully crafted.</span>
		</hgroup>
		<p>
			Fully customizable SVG icons, open-sourced under the MIT license, and created by
			<a rel="noopener noreferrer" target="_blank" href="https://github.com/coreproject-moe">
				@coreproject-team
			</a>.
		</p>
	</header>

	<label class="search">
		<coreicons-shape-search></coreicons-shape-search>
		<input type="search" placeholder="Search icons..." bind:value={query} />
	</label>

	<div class="grid">
		{#each sorted as { "icon-name": name, type, variants }}
			{#if variants}
				{#each variants as variant}
					{@const html = resolve_icon(name, type, variant)}
					<button onclick={() => copy_icon(html)}>{@html html}</button>
				{/each}
			{:else}
				{@const html = resolve_icon(name, type)}
				<button onclick={() => copy_icon(html)}>{@html html}</button>
			{/if}
		{/each}
	</div>

	<footer>
		<span>
			Made with ❤️ by
			<a href="https://github.com/coreproject-moe" target="_blank" rel="noopener">
				CoreProject Team
			</a>.
		</span>
		<span>Under the MIT license.</span>
	</footer>
</main>

<style lang="scss">
	main {
		margin-top: var(--header-height);
		max-width: 35rem;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;

		nav {
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

		header {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 0.5rem;

			hgroup {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				font-size: 3rem;
				font-weight: bold;
				line-height: 1;
				color: var(--color-info);

				span:first-child {
					color: var(--color-accent);
				}
			}

			p {
				color: color-mix(in srgb, var(--color-info) 75%, transparent);

				a {
					color: var(--color-info);
					font-weight: 600;
				}
			}
		}

		.search {
			display: flex;
			align-items: center;
			position: relative;
			width: 100%;
			height: 3rem;
			border: 2px solid var(--color-neutral);
			border-radius: 0.75rem;
			transition: border-color 0.3s ease-out;
			cursor: text;

			&:focus-within {
				border-color: var(--color-info);
			}

			coreicons-shape-search {
				position: absolute;
				left: 1rem;
				pointer-events: none;
				color: var(--color-info);
				opacity: 75%;
				transition: opacity 0.3s ease-out;
			}

			&:focus-within coreicons-shape-search {
				opacity: 100%;
			}

			input {
				padding-left: 2.5rem;
				background-color: transparent;
				outline: none;
				flex: 1;
				height: 100%;
				border: none;
			}
		}

		.grid {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			gap: 0.5rem;

			@media (width >= 40rem) {
				grid-template-columns: repeat(8, 1fr);
			}

			button {
				aspect-ratio: 1 / 1;
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

		footer {
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
