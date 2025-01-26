<script lang="ts">
	import "../global.css";
	import { defineCustomElements } from "@coreproject-moe/icons/loader";
	let { children } = $props();

	$effect.pre(() => {
		defineCustomElements(globalThis.window);
	});
</script>

<main class="bg-secondary flex h-dvh w-dvw">
	{@render children()}
</main>

<!-- svelte-ignore css_unused_selector -->
<style lang="scss" global>
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-SemiBoldItalic.woff2") format("woff2");
		font-weight: 600;
		font-style: italic;
		font-display: swap;
	}
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-SemiBold.woff2") format("woff2");
		font-weight: 600;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-BoldItalic.woff2") format("woff2");
		font-weight: bold;
		font-style: italic;
		font-display: swap;
	}
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-Italic.woff2") format("woff2");
		font-weight: normal;
		font-style: italic;
		font-display: swap;
	}
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-Regular.woff2") format("woff2");
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-Bold.woff2") format("woff2");
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: "JetBrains Mono";
		src: url("../fonts/Jetbrains\ Mono/JetBrainsMono-BoldItalic.woff2") format("woff2");
		font-weight: 700;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: "JetBrains Mono";
		src: url("../fonts/Jetbrains\ Mono/JetBrainsMono-Bold.woff2") format("woff2");
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: "JetBrains Mono";
		src: url("../fonts/Jetbrains\ Mono/JetBrainsMono-ExtraBoldItalic.woff2") format("woff2");
		font-weight: 800;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: "JetBrains Mono";
		src: url("../fonts/Jetbrains\ Mono/JetBrainsMono-ExtraBold.woff2") format("woff2");
		font-weight: 800;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: "JetBrains Mono";
		src: url("../fonts/Jetbrains\ Mono/JetBrainsMono-Italic.woff2") format("woff2");

		font-weight: 400;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: "JetBrains Mono";
		src: url("../fonts/Jetbrains\ Mono/JetBrainsMono-MediumItalic.woff2") format("woff2");
		font-weight: 500;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: "JetBrains Mono";
		src: url("../fonts/Jetbrains\ Mono/JetBrainsMono-Medium.woff2") format("woff2");
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: "JetBrains Mono";
		src: url("../fonts/Jetbrains\ Mono/JetBrainsMono-Regular.woff2") format("woff2");
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}
</style>
