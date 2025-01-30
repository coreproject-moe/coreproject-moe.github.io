<script lang="ts">
	import Highlight from "$lib/components/highlight.svelte";

	const installation_mapping: { type: string; code: String; language: string }[] = [
		{
			type: "React (Vite)",
			code: `
// src/App.tsx
import { defineCustomElements } from "@coreproject-moe/icons/loader";

function App(){
	defineCustomElements();
	return <></>
}
		`,
			language: "tsx"
		},
		{
			type: "React (Next.js)",
			code: `
// app/layout.tsx
import { defineCustomElements } from "@coreproject-moe/icons/loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  defineCustomElements();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
  	`,
			language: "tsx"
		},
		{
			type: "SvelteKit",
			code: `
<!-- src/routes/layout.svelte -->
<script lang='ts'>
	import { defineCustomElements } from "@coreproject-moe/icons/loader";
	import { onMount } from 'svelte';

	onMount(()=>{
		defineCustomElements();
	})
<\/script>
		`,
			language: "html"
		},
		{
			type: "Html",
			code: `
<script type="module" src='https://cdn.jsdelivr.net/npm/@coreproject-moe/icons@latest'><\/script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@coreproject-moe/icons@latest/dist/coreproject-icons/coreproject-icons.js"><\/script>
			`,
			language: "html"
		}
	];

	const properties = ["width,", "height,", "_style"];
</script>

<div
	class="prose prose-invert prose-headings:mb-2 prose-p:my-2 prose-pre:my-4 prose-pre:rounded-xl prose-pre:bg-neutral/50 px-5 py-10 md:px-0 md:py-20"
>
	<h1 class="text-warning">Usage</h1>
	<p class="text-info !mt-8 text-lg">
		Coreicons is a completely open-source icon set crafted for web, iOS, Android, and desktop apps.
		Coreicons was made for CoreProject, a streaming platform.
	</p>
	<h2>Installation</h2>
	<p>
		You can install Coreicons from npm with your favorite package manager. And place the following
		code in your main entry file.
	</p>
	<Highlight language="bash" code="npm install @coreproject-moe/icons" />

	Here is how to use it with different frameworks:

	<div role="tablist" class="tabs tabs-lift overflow-x-scroll pt-5 text-white">
		{#each installation_mapping as item, idx}
			<input
				checked={idx === 0}
				type="radio"
				name="code_items"
				role="tab"
				class="tab checked:!bg-neutral/50 !w-max bg-transparent text-white !ring-0 !outline-none first:ml-0.5 checked:!bg-[url('')]"
				aria-label={item.type}
			/>
			<div
				role="tabpanel"
				class={`tab-content overflow-x-scroll [&>pre]:m-0 first:[&>pre]:rounded-tl-none`}
			>
				<Highlight language={item.language} code={item.code.trim()} />
			</div>
		{/each}
	</div>
	<h2>Basic Usage</h2>
	<p>
		To use a built-in icon from the Ionicons package, populate the <code>name</code> attribute on
		the <code>coreproject-[shape|logo]-[icon-name]</code>
		component:
	</p>
	<Highlight language="html" code="<coreicons-shape-airplay></coreicons-shape-airplay>" />
	<h2>Variants</h2>
	<p>
		There are some icons with variants, you can use different variants of one icon with an <code
			>attr</code
		>: <code>variant</code> like:
	</p>
	<Highlight
		language="html"
		code="<coreicons-shape-align variant='justify'></coreicons-shape-align>"
	/>
	<h2>Properties / Attributes</h2>
	<p>
		You can provide
		{#each properties as property}
			<code>{property}</code>
		{/each}
		that will be passed to the shadow svg. Here is an example:
	</p>
	<Highlight
		language="html"
		code="<coreicons-shape-airplay class='text-primary' width='200' height='200' _style='color: black'></coreicons-shape-airplay>"
	/>
	<hr />
	<h3>Issue Tracker</h3>
	<p>
		If you see any issue with icons, feel free to raise an issue <a
			href="https://github.com/coreproject-moe/monorepo/issues">here.</a
		>
	</p>
	<p>Thank you!</p>
</div>
