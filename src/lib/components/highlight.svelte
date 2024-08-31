<script lang="ts">
	import { onMount } from "svelte";
	import hljs from "highlight.js";

	const {
		code,
		language
	}: {
		code: string;
		language: string;
	} = $props();

	let highlighted_code = $state("");

	onMount(() => {
		highlighted_code = hljs.highlight(code, { language }).value;
	});
</script>

<pre class="language-{language}"><code>{@html highlighted_code}</code></pre>
