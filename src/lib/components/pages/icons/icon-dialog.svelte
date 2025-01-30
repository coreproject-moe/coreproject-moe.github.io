<script lang="ts">
	import Highlight from "$lib/components/highlight.svelte";
	import { given_icon_name_return_html_string } from "$lib/functions/icons";
	import { SvelteMap } from "svelte/reactivity";

	const {
		dialog_elements,
		icon,
		type,
		uuid,
		variant
	}: {
		dialog_elements: SvelteMap<string, HTMLDialogElement>;
		icon: string;
		type: string;
		uuid: string;
		variant?: string;
	} = $props();

	let dialog_element = $state<HTMLDialogElement>();

	$effect(() => {
		if (dialog_element) {
			dialog_elements.set(uuid, dialog_element);
		}
	});
</script>

<dialog bind:this={dialog_element} class="modal backdrop:bg-transparent">
	<div
		class="modal-box bg-secondary absolute bottom-5 h-max overflow-x-hidden p-0 md:bottom-10 md:max-w-max"
	>
		<div class="bg-neutral/50 flex w-full items-center p-3">
			<div class="flex flex-col gap-2 overflow-x-scroll">
				<div class="flex items-center gap-2">
					<div class="size-5">
						{@html given_icon_name_return_html_string({
							icon_type: type,
							icon_name: icon,
							classname: "size-5",
							variant
						})}
					</div>
					<span class="text-accent text-lg font-semibold">
						{icon}

						{#if variant}
							({variant})
						{/if}
					</span>
					<button
						onclick={async (e) => {
							const target = e.target as HTMLButtonElement;
							await navigator.clipboard.writeText(
								given_icon_name_return_html_string({
									icon_type: type,
									icon_name: icon
								})
							);
							target.innerText = "Copied";
							setTimeout(() => {
								target.innerText = "Copy";
							}, 2000);
						}}
						class="btn btn-primary btn-xs ml-auto">Copy</button
					>
				</div>
				<code class="bg-secondary/75 w-full overflow-x-scroll rounded-xl p-2 text-sm">
					<Highlight
						code={given_icon_name_return_html_string({
							icon_type: type,
							icon_name: icon,
							variant
						})}
						language="html"
					/>
				</code>
			</div>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
