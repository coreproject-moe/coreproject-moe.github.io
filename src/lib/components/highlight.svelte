<script lang="ts">
	import hljs from "highlight.js";

	const {
		code,
		language
	}: {
		code: string;
		language: string;
	} = $props();
</script>

<pre class="language-{language}"><code>{@html hljs.highlight(code, { language }).value}</code></pre>
