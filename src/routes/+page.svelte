<script lang="ts">
	import CoreIsometric from "$lib/components/icons/core-isometric.svelte";
	import Coreproject from "$lib/components/icons/coreproject.svelte";
</script>

<svelte:head>
	<title>CoreProject - Imagine a new platform</title>
</svelte:head>

<main class="grid h-screen w-screen place-items-center">
	<section
		class="mx-auto flex w-full flex-col flex-col-reverse items-center justify-between gap-20 p-5 md:max-w-5xl md:flex-row"
	>
		<div class="flex h-full flex-col justify-between gap-20">
			<coreproject-shape-logo height="48" width="48" class="hidden size-14 md:flex"></coreproject-shape-logo>
			<div class="flex flex-col items-start gap-4">
				<Coreproject class="h-12 w-auto md:h-16" />
				<h2 class="text-xl font-medium md:text-2xl">
					Imagine a new platform where creativity thrives and limitless possibilities emerge.
				</h2>
				<div class="flex items-center gap-4 mt-2">
					<a
						href="/icons"
						class="btn btn-primary flex h-max min-h-max rounded-lg p-3 px-4 text-accent"
						>CoreIcons <coreproject-shape-box height="24" width="24" class="w-5"></coreproject-shape-box></a
					>
					<a
						href="https://github.com/coreproject-moe/monorepo"
						target="_blank"
						class="btn btn-neutral flex h-max min-h-max rounded-lg p-3 px-4 text-accent"
						>Github <coreproject-logo-github height="24" width="24" class="w-5"></coreproject-logo-github></a
					>
				</div>
			</div>
			<div class="flex flex-col items-start gap-2">
				<a
					href="https://github.com/coreproject-moe"
					target="_blank"
					class="flex gap-2 text-accent group"
				>
					<coreproject-logo-github 
					height="22" 
					width="22" 
					class="size-4"
					></coreproject-logo-github>
					<span class="ml-2 group-hover:underline group-hover:text-primary transition-all duration-100">github/coreproject-moe</span></a
				>
				<p>Join us in shaping the future of anime, manga, and sound streaming.</p>
			</div>
		</div>
		<CoreIsometric class="flex h-72 w-auto flex-shrink-0 overflow-visible md:h-[70vh]" />
	</section>
</main>
