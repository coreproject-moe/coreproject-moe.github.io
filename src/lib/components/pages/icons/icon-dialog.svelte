<script lang="ts">
	import Highlight from "$lib/components/highlight.svelte";
	import { given_icon_name_return_html_string } from "$lib/functions/icons";

	const {
		icon,
		type,
		uuid,
		variant
	}: {
		icon: string;
		type: string;
		uuid: string;
		variant?: string;
	} = $props();
</script>

<dialog id={uuid} class="modal backdrop:bg-transparent">
	<div
		class="modal-box absolute bottom-5 h-max overflow-x-hidden bg-secondary p-0 md:bottom-10 md:max-w-max"
	>
		<div class="flex w-full items-center bg-neutral/50 p-3">
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
					<span class="text-lg font-semibold text-accent">
						{icon}
					</span>
					<button
						onclick={(e) => {
							const target = e.target as HTMLButtonElement;
							navigator.clipboard
								.writeText(
									given_icon_name_return_html_string({
										icon_type: type,
										icon_name: icon,
									})
								)
								.then(() => {
									target.innerText = "Copied";
									setTimeout(() => (target.innerText = "Copy"), 2000);
								});
						}}
						class="btn btn-primary btn-xs ml-auto">Copy</button
					>
				</div>
				<code class="w-full overflow-x-scroll rounded-xl bg-secondary/75 p-2 text-sm">
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
