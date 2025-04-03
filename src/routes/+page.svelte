<script lang="ts">
	import Header from "$lib/components/header.svelte";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	let contributers_count = $state(0);
	let stargazers_count = $state(0);

	onMount(async () => {
		try {
			const base_api_url = "https://api.github.com/repos/coreproject-moe/CoreProject";
			const contributers_res = await fetch(`${base_api_url}/contributors?per_page=1&anon=true`);
			// github returns a link header for paginated results
			const link_header = contributers_res.headers.get("Link");

			if (link_header) {
				// extract the last page number from the link header
				const last_page_match = link_header.match(/page=(\d+)>; rel="last"/);
				if (last_page_match) contributers_count = parseInt(last_page_match[1], 10);
			}

			// fetch stargazers count
			const stargazers_res = await fetch(base_api_url);
			const stagazers_data = await stargazers_res.json();
			stargazers_count = stagazers_data.stargazers_count;
		} catch (err) {
			console.error(err);
		}
	});
</script>

<svelte:head>
	<title>Core Developer Hub - CoreProject</title>
</svelte:head>

<Header />
<main>
	<div class="hero-container">
		<div class="hero-content">
			<span>Powering developers & creators</span>
			<h1>Build the Future with Core.</h1>
			<p>Imagine a new platform where creativity thrives and limitless possibilities emerge.</p>
			<div class="cta">
				<a
					href="https://github.com/coreproject-moe/monorepo"
					target="_blank"
					class="btn btn-primary"
				>
					<coreicons-logo-github></coreicons-logo-github>
					Monorepo
				</a>
				<a href="/icons" class="btn">
					<coreicons-shape-box></coreicons-shape-box>
					Coreicons
				</a>
			</div>
		</div>
		<!-- vectors -->
		<!-- triangle -->
		<div class="dl-triangle-vector">
			<svg
				width="203"
				height="203"
				viewBox="0 0 203 203"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1 202V2L201 202H1Z" stroke="url(#paint0_linear_1_3)" />
				<defs>
					<linearGradient
						id="paint0_linear_1_3"
						x1="1"
						y1="202"
						x2="151"
						y2="202"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#EDD68D" />
						<stop offset="1" stop-color="#947D32" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
			{#if contributers_count}
				<div in:fly={{ y: 5 }} class="info-box contributers">
					<span class="head">contributers</span>
					<div>
						<span class="count">{contributers_count}</span>
						<span class="badge">peeps</span>
					</div>
				</div>
			{/if}
		</div>
		<!-- semicircle -->
		<div class="dl-semicircle-vector">
			<svg
				width="261"
				height="155"
				viewBox="0 0 261 155"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M58.5 154.5H0.500015C0.500015 -50.5 260.5 -49.5 260.5 154.5H203.5C203.5 25.1663 58.5 24.1893 58.5 154.5Z"
					stroke="url(#paint0_linear_3_10)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_3_10"
						x1="261"
						y1="155"
						x2="131"
						y2="155"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#DCD9F7" />
						<stop offset="1" stop-color="#817F91" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
			{#if stargazers_count}
				<div in:fly={{ y: 5 }} class="info-box stargazers">
					<span class="head">stargazers</span>
					<div>
						<span class="count">{stargazers_count}</span>
						<span class="badge">stars</span>
					</div>
				</div>
			{/if}
		</div>
	</div>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		overflow: hidden;
		padding-inline: 1rem;
	}

	.hero-container {
		flex: 1;
		margin: auto;
		position: relative;
		display: grid;
		place-items: center;

		@media (width >= 80rem) {
			max-width: var(--header-width);
		}

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

		.info-box {
			position: absolute;
			padding: 1rem;
			background-color: color-mix(in srgb, var(--color-neutral) 25%, transparent);
			border: 1px solid var(--color-neutral);
			backdrop-filter: blur(1rem);

			&.contributers {
				top: 1rem;
				right: 5rem;

				div span.badge {
					background-color: color-mix(in srgb, var(--color-error) 25%, transparent);
					color: var(--color-warning);
				}
			}

			&.stargazers {
				top: -2rem;
				left: 10rem;

				div span.badge {
					background-color: color-mix(in srgb, var(--color-primary) 25%, transparent);
					color: var(--color-accent);
				}
			}

			span.head {
				text-transform: uppercase;
				font-weight: 600;
				font-size: 0.75rem;
				color: var(--color-info);
				opacity: 75%;
			}

			div {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				span.count {
					font-weight: bold;
					font-size: 1.75rem;
				}

				span.badge {
					line-height: 0;
					padding: 0.65rem 0.5rem;
					border-radius: 1rem;
					text-transform: uppercase;
					font-size: 0.75rem;
				}
			}
		}
	}

	.dl-triangle-vector {
		z-index: -1;
		position: absolute;
		right: -12rem;
		top: -5rem;

		svg {
			width: 15rem;
			height: auto;
		}

		@media (width >= 40rem) {
			right: -10rem;
		}

		@media (width >= 48rem) {
			right: -5rem;
		}

		@media (width >= 64rem) {
			right: 0rem;
		}

		@media (width >= 80rem) {
			right: 10rem;
		}
	}

	.dl-semicircle-vector {
		z-index: -1;
		position: absolute;
		left: -24rem;
		bottom: 0;

		svg {
			width: 25rem;
			height: auto;
		}

		@media (width >= 40rem) {
			left: -20rem;
		}

		@media (width >= 48rem) {
			left: -15rem;
		}

		@media (width >= 64rem) {
			left: -8rem;
		}

		@media (width >= 80rem) {
			left: 0;
		}
	}
</style>
