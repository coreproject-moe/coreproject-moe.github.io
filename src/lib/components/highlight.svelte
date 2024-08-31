<script lang="ts">
	import { onMount } from "svelte";
	import Prism from "prismjs";

	const {
		code,
		language
	}: {
		code: string;
		language: string;
	} = $props();

	let highlighted_code = $state("");

	onMount(() => {
		const trimmedCode = code
			.split("\n")
			.map((line) => line.trimEnd())
			.join("\n");
		highlighted_code = Prism.highlight(trimmedCode, Prism.languages[language], language);
	});
</script>

<pre class="language-{language}"><code>{@html highlighted_code}</code></pre>
