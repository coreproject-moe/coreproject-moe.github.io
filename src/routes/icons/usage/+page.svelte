<script>
	import Highlight from "$lib/components/highlight.svelte";

	const installation_mapping = [
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
&lt;script lang='ts'&gt
	import { defineCustomElements } from "@coreproject-moe/icons/loader";
	import { onMount } from 'svelte';

	onMount(()=>{
		defineCustomElements();
	})

&lt;/script&gt
			`,
			language: "svelte"
		}
	];

	console.log(installation_mapping);
</script>

<div
	class="prose prose-invert px-5 py-10 prose-headings:mb-2 prose-p:my-2 prose-pre:my-4 prose-pre:rounded-xl prose-pre:bg-neutral/50 md:px-0 md:py-20"
>
	<h1 class="text-warning">Usage</h1>
	<p class="!mt-8 text-lg text-info">
		Coreicons is a completely open-source icon set crafted for web, iOS, Android, and desktop apps.
		Coreicons was made for CoreProject, a streaming platform.
	</p>
	<h2>Installation</h2>
	<p>You can install Coreicons from npm with your favorite package manager.</p>
	<Highlight language="bash" code="npm install @coreproject-moe/icons" />
	<p>And place the following code in your main entry file.</p>
	<Highlight
		language="jsx"
		code={`import { defineCustomElements } from "@coreproject-moe/icons/loader";

render(() => {
  onMount(() => {
    defineCustomElements(window);
  });

  return (
    <coreproject-shape-github class="md:size-5 text-accent"></coreproject-shape-github>
  );
}, document.getElementById("root")!);`}
	/>
	<h2>Basic Usage</h2>
	<p>
		To use a built-in icon from the Ionicons package, populate the <code>name</code> attribute on
		the <code>coreproject-[shape|logo]-[icon-name]</code>
		component:
	</p>
	<Highlight language="xml" code="<coreproject-shape-airplay></coreproject-shape-airplay>" />
	<h2>Variants</h2>
	<p>
		There are some icons with variants, you can use different variants of one icon with an <code
			>attr</code
		>: <code>variant</code> like:
	</p>
	<Highlight
		language="xml"
		code="<coreproject-shape-align variant='justify'></coreproject-shape-align>"
	/>
	<h2>Props/Attrs</h2>
	<p>
		You can provide all <code>SVGAttributes</code> just like normal html <code>attrs</code> like:
	</p>
	<Highlight
		language="xml"
		code="<coreproject-shape-airplay class='text-primary' width=200 height=200></coreproject-shape-airplay>"
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
