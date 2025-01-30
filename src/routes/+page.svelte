<script lang="ts">
	import CoreIsometric from "$lib/components/icons/core-isometric.svelte";
	import Coreproject from "$lib/components/icons/coreproject.svelte";
</script>

<svelte:head>
	<title>CoreProject - Imagine a new platform</title>
</svelte:head>

<div
	class="mx-auto flex h-max w-full flex-col items-center justify-between gap-20 self-center p-5 md:max-w-5xl md:flex-row"
>
	<div class="flex h-full flex-col justify-between gap-20">
		<coreicons-shape-logo class="hidden size-14 md:flex"></coreicons-shape-logo>
		<div class="flex flex-col items-start gap-4">
			<Coreproject class="h-12 w-auto md:h-16" />
			<h2 class="text-xl font-medium md:text-2xl">
				Imagine a new platform where creativity thrives and limitless possibilities emerge.
			</h2>
			<div class="flex items-center gap-4">
				<a
					href="/icons"
					class="btn btn-primary text-accent flex h-max min-h-max rounded-xl p-3 px-4"
					>CoreIcons <coreicons-shape-box class="size-4"></coreicons-shape-box></a
				>
				<a
					href="https://github.com/coreproject-moe/monorepo"
					target="_blank"
					class="btn btn-neutral text-accent flex h-max min-h-max rounded-xl p-3 px-4"
					>Github <coreicons-logo-github class="size-4"></coreicons-logo-github></a
				>
			</div>
		</div>
		<div class="flex flex-col items-start gap-2">
			<a
				href="https://github.com/coreproject-moe"
				target="_blank"
				class="text-accent flex items-center gap-2"
			>
				<coreicons-logo-github class="size-4"></coreicons-logo-github>github/coreproject-moe</a
			>
			<p>Join us in shaping the future of anime, manga, and sound streaming.</p>
		</div>
	</div>
	<CoreIsometric class="flex h-72 w-auto flex-shrink-0 overflow-visible md:h-[70vh]" />
</div>
