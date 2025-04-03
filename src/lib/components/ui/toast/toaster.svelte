<script lang="ts">
	import { flip } from "svelte/animate";
	import { toasts_store } from "./toast.svelte";
	import { fly } from "svelte/transition";
</script>

<div class="toaster">
	{#each toasts_store.value as toast (toast.id)}
		<div animate:flip={{ duration: 300 }} transition:fly={{ y: 5 }} class="toast">
			{#if toast.icon}
				{@html toast.icon}
			{:else}
				<coreicons-shape-info></coreicons-shape-info>
			{/if}
			<span>{toast.message}</span>
			<button aria-label="Close toast" onclick={() => toasts_store.dismiss(toast.id)}>
				<coreicons-shape-x variant="no-border"></coreicons-shape-x>
			</button>
		</div>
	{/each}
</div>

<style>
	.toaster {
		position: fixed;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		margin: 0 auto;
		color: var(--color-accent);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;

		.toast {
			background-color: var(--color-neutral);
			height: 3rem;
			padding-inline: 1rem;
			border-radius: 0.75rem;
			line-height: 1;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: var(--color-info);

			span {
				font-weight: 600;
			}

			button {
				font-size: 0.75rem;
			}
		}
	}
</style>
