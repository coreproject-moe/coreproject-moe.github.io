<script lang="ts">
	import IconDialog from "$lib/components/pages/icons/icon-dialog.svelte";
	import { given_icon_name_return_html_string } from "$lib/functions/icons";
	import { onMount } from "svelte";
	import { bigram_search, linear_search } from "$lib/functions/search";
	import { v4 as uuidv4 } from "uuid";
	import { SvelteMap } from "svelte/reactivity";

	let icons_json = $state<{ "icon-name": string; type: string; variants?: string[] }[] | null>(
		null
	);
	let icons = $state<null | typeof icons_json>(null);
	let dialog_elements = $state(new SvelteMap<string, HTMLDialogElement>());

	onMount(async () => {
		icons_json = (await import("$lib/icons.json")).default;
		icons = icons_json;
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
		console.log(id);
		const el = dialog_elements.get(id);
		el!.showModal();
	}
</script>

<div class="flex flex-col gap-10 px-5 py-10 md:px-0 md:py-20">
	<div class="flex flex-col gap-5 md:px-10">
		<p class="text-center text-4xl font-black text-info md:text-5xl">
			<span class="text-warning">Core Icons.</span><br />Beautifully crafted.
		</p>
		<p class="text-acccent/70 text-center text-sm md:text-lg">
			Fully customizable SVG icons, open-source under the MIT license, and created by
			@coreproject-team.
		</p>
	</div>
	<div class="relative flex w-full items-center">
		<coreproject-shape-search class="absolute left-4 size-5 stroke-2"></coreproject-shape-search>
		<input
			oninput={(event) => {
				event.preventDefault();
				handle_input(event);
			}}
			placeholder="Search icons..."
			class="w-full rounded-xl border-none bg-neutral p-4 pl-12 font-semibold outline-none transition focus:ring-2 md:focus:ring-[0.2rem]"
		/>
	</div>
	<div class="grid grid-cols-5 gap-2 md:grid-cols-8">
		{#if icons}
			{#each icons.sort((a, b) => a["icon-name"].localeCompare(b["icon-name"])) as item}
				{@const icon = item["icon-name"]}
				{@const variants = item.variants}
				{@const icon_type = item.type}

				{#if variants}
					{#each variants as it}
						{@const uuid = uuidv4()}
						<button
							class="grid aspect-square cursor-pointer place-items-center rounded-xl transition-colors hover:bg-neutral/50 hover:text-accent"
							onclick={() => {
								open_icon_model(uuid);
							}}
						>
							{@html given_icon_name_return_html_string({
								icon_name: icon,
								icon_type: icon_type,
								classname: "size-5",
								variant: it
							})}
						</button>
						<IconDialog {dialog_elements} type={icon_type} {uuid} {icon} variant={it} />
					{/each}
				{:else}
					{@const uuid = uuidv4()}
					<button
						class="grid aspect-square cursor-pointer place-items-center rounded-xl transition-colors hover:bg-neutral/50 hover:text-accent"
						onclick={() => {
							open_icon_model(uuid);
							console.log(icon);
						}}
					>
						{@html given_icon_name_return_html_string({
							icon_name: icon,
							icon_type: icon_type,
							classname: "size-5"
						})}
					</button>
					<IconDialog {dialog_elements} type={icon_type} {uuid} {icon} />
				{/if}
			{/each}
		{/if}
	</div>
</div>
