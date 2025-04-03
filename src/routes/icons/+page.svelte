<script lang="ts">
	import IconDialog from "$lib/components/pages/icons/icon-dialog.svelte";
	import { given_icon_name_return_html_string } from "$lib/utils/icons";
	import { bigram_search, linear_search } from "$lib/utils/search";
	import { v4 as uuidv4 } from "uuid";
	import { SvelteMap } from "svelte/reactivity";

	type Icon = { "icon-name": string; type: string; variants?: string[] };

	let icons_json = $state<Icon[] | null>(null);
	let icons = $state<Icon[] | null>(null);
	let dialog_elements = $state(new SvelteMap<string, HTMLDialogElement>());

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

	function open_icon_model(id: string) {
		const el = dialog_elements.get(id);
		el!.showModal();
	}
</script>

<div class="head-container">
	<div class="main-text">
		<span class="coreicons">CoreIcons.</span>
		<span>Beautifully crafted.</span>
	</div>
	<p class="sub-text">
		Fully customizable SVG icons, open-sourced under the MIT license, and created by
		<a rel="nofollow" target="_blank" href="https://github.com/coreproject-moe">
			@coreproject-team
		</a>.
	</p>
</div>
<div class="search-container">
	<coreicons-shape-search class="icon"></coreicons-shape-search>
	<input
		oninput={(event) => {
			event.preventDefault();
			handle_input(event);
		}}
		placeholder="Search icons..."
	/>
</div>
<div class="icons-container">
	{#if icons}
		{#each icons.toSorted((a, b) => a["icon-name"].localeCompare(b["icon-name"])) as item}
			{@const icon = item["icon-name"]}
			{@const variants = item.variants}
			{@const icon_type = item.type}

			{#if variants}
				{#each variants as it}
					{@const uuid = uuidv4()}
					<button
						class="hover:bg-neutral/50 hover:text-accent grid aspect-square cursor-pointer place-items-center rounded-xl transition-colors"
						onclick={() => {
							open_icon_model(uuid);
						}}
					>
						{@html given_icon_name_return_html_string({
							icon_name: icon,
							icon_type: icon_type,
							classname: "icon",
							variant: it
						})}
					</button>
					<IconDialog {dialog_elements} type={icon_type} {uuid} {icon} variant={it} />
				{/each}
			{:else}
				{@const uuid = uuidv4()}
				<button
					class="hover:bg-neutral/50 hover:text-accent grid aspect-square cursor-pointer place-items-center rounded-xl transition-colors"
					onclick={() => {
						open_icon_model(uuid);
					}}
				>
					{@html given_icon_name_return_html_string({
						icon_name: icon,
						icon_type: icon_type,
						classname: "icon"
					})}
				</button>
				<IconDialog {dialog_elements} type={icon_type} {uuid} {icon} />
			{/if}
		{/each}
	{/if}
</div>
<footer>
	<span>
		Made with ❤️ by
		<a href="https://github.com/coreproject-moe" target="_blank" rel="noopener">CoreProject Team</a
		>.
	</span>
	<span>Under the MIT license.</span>
</footer>

<style>
	.head-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.5rem;

		.main-text {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			font-size: 3rem;
			font-weight: bold;
			line-height: 1;
			color: var(--color-info);

			.coreicons {
				color: var(--color-accent);
			}
		}

		.sub-text {
			color: color-mix(in srgb, var(--color-info) 75%, transparent);

			a {
				color: var(--color-info);
				font-weight: 600;
			}
		}
	}

	.search-container {
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

			.icon {
				opacity: 100%;
			}
		}

		.icon {
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

	.icons-container {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: 0.5rem;

		button {
			aspect-ratio: 1/1;
			border-radius: 0.5rem;
			display: grid;
			place-items: center;
			transition: background-color 0.5s ease-out 0.1s;

			&:hover {
				background-color: var(--color-neutral);
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
</style>
