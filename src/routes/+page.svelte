<script lang="ts">
	import Header from "$lib/components/header.svelte";
</script>

<svelte:head>
	<title>Core Developer Hub - CoreProject</title>
</svelte:head>

<Header />
<div class="hero-container">
	<div class="hero-content">
		<span>Powering developers & creators</span>
		<h1>Build the Future with Core.</h1>
		<p>Imagine a new platform where creativity thrives and limitless possibilities emerge.</p>
		<div class="cta">
			<button class="btn btn-primary">
				<coreicons-logo-github></coreicons-logo-github>
				Monorepo
			</button>
			<button class="btn">
				<coreicons-shape-box></coreicons-shape-box>
				Coreicons
			</button>
		</div>
	</div>
</div>

<style>
	.hero-container {
		flex: 1;
		display: grid;
		place-items: center;

		.hero-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
			max-width: 25rem;
			text-align: center;

			span {
				text-transform: uppercase;
				font-weight: 600;
				font-size: 0.75rem;
				color: var(--color-info);
			}

			h1 {
				font-size: 3rem;
				font-weight: bold;
				line-height: normal;
			}

			p {
				color: var(--color-info);
				opacity: 75%;
			}

			.cta {
				display: flex;
				align-items: center;
				gap: 0.75rem;
			}
		}
	}
</style>
