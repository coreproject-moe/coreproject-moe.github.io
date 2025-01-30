<script lang="ts">
	import "highlight.js/scss/github-dark.scss";

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
