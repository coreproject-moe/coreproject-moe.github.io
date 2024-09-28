<script lang="ts">
	import CoreIsometric from "$lib/components/icons/core-isometric.svelte";
	import Coreproject from "$lib/components/icons/coreproject.svelte";
</script>

<main class="grid h-screen w-screen place-items-center">
	<section class="mx-auto flex w-full max-w-5xl items-center justify-between gap-20">
		<div class="flex h-full flex-col justify-between gap-20">
			<coreproject-shape-logo class="size-14"></coreproject-shape-logo>
			<div class="flex flex-col items-start gap-4">
				<Coreproject class="h-16 w-auto" />
				<h2 class="text-2xl font-semibold">
					Imagine a new platform where creativity thrives and limitless possibilities emerge.
				</h2>
				<div class="flex items-center gap-4">
					<a
						href="/icons"
						class="btn btn-primary flex h-max min-h-max rounded-xl p-3 px-4 text-accent"
						>CoreIcons <coreproject-shape-box class="w-5"></coreproject-shape-box></a
					>
					<button class="btn btn-neutral flex h-max min-h-max rounded-xl p-3 px-4 text-accent"
						>Github <coreproject-logo-github class="w-5"></coreproject-logo-github></button
					>
				</div>
			</div>
			<div class="flex flex-col items-start">
				<a href="https://github.com/coreproject-moe" target="_blank" class="text-accent"
					>github/coreproject-moe</a
				>
				<p>Join us in shaping the future of anime, manga, and sound streaming.</p>
			</div>
		</div>
		<CoreIsometric class="flex h-[70vh] w-auto flex-shrink-0 overflow-visible" />
	</section>
</main>
