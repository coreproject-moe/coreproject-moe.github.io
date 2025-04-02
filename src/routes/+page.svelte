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
	<svg
		class="dl-triangle-vector"
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
	<svg
		class="dl-semicircle-vector"
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
	<svg
		class="dl-grids-vector"
		width="86"
		height="62"
		viewBox="0 0 86 62"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="1" cy="1" r="1" fill="#1E2036" />
		<circle cx="13" cy="1" r="1" fill="#1E2036" />
		<circle cx="25" cy="1" r="1" fill="#1E2036" />
		<circle cx="37" cy="1" r="1" fill="#1E2036" />
		<circle cx="49" cy="1" r="1" fill="#1E2036" />
		<circle cx="61" cy="1" r="1" fill="#1E2036" />
		<circle cx="73" cy="1" r="1" fill="#1E2036" />
		<circle cx="85" cy="1" r="1" fill="#1E2036" />
		<circle cx="1" cy="13" r="1" fill="#1E2036" />
		<circle cx="13" cy="13" r="1" fill="#1E2036" />
		<circle cx="25" cy="13" r="1" fill="#1E2036" />
		<circle cx="37" cy="13" r="1" fill="#1E2036" />
		<circle cx="49" cy="13" r="1" fill="#1E2036" />
		<circle cx="61" cy="13" r="1" fill="#1E2036" />
		<circle cx="73" cy="13" r="1" fill="#1E2036" />
		<circle cx="85" cy="13" r="1" fill="#1E2036" />
		<circle cx="1" cy="25" r="1" fill="#1E2036" />
		<circle cx="13" cy="25" r="1" fill="#1E2036" />
		<circle cx="25" cy="25" r="1" fill="#1E2036" />
		<circle cx="37" cy="25" r="1" fill="#1E2036" />
		<circle cx="49" cy="25" r="1" fill="#1E2036" />
		<circle cx="61" cy="25" r="1" fill="#1E2036" />
		<circle cx="73" cy="25" r="1" fill="#1E2036" />
		<circle cx="85" cy="25" r="1" fill="#1E2036" />
		<circle cx="1" cy="37" r="1" fill="#1E2036" />
		<circle cx="13" cy="37" r="1" fill="#1E2036" />
		<circle cx="25" cy="37" r="1" fill="#1E2036" />
		<circle cx="37" cy="37" r="1" fill="#1E2036" />
		<circle cx="49" cy="37" r="1" fill="#1E2036" />
		<circle cx="61" cy="37" r="1" fill="#1E2036" />
		<circle cx="73" cy="37" r="1" fill="#1E2036" />
		<circle cx="85" cy="37" r="1" fill="#1E2036" />
		<circle cx="1" cy="49" r="1" fill="#1E2036" />
		<circle cx="13" cy="49" r="1" fill="#1E2036" />
		<circle cx="25" cy="49" r="1" fill="#1E2036" />
		<circle cx="37" cy="49" r="1" fill="#1E2036" />
		<circle cx="49" cy="49" r="1" fill="#1E2036" />
		<circle cx="61" cy="49" r="1" fill="#1E2036" />
		<circle cx="73" cy="49" r="1" fill="#1E2036" />
		<circle cx="85" cy="49" r="1" fill="#1E2036" />
		<circle cx="1" cy="61" r="1" fill="#1E2036" />
		<circle cx="13" cy="61" r="1" fill="#1E2036" />
		<circle cx="25" cy="61" r="1" fill="#1E2036" />
		<circle cx="37" cy="61" r="1" fill="#1E2036" />
		<circle cx="49" cy="61" r="1" fill="#1E2036" />
		<circle cx="61" cy="61" r="1" fill="#1E2036" />
		<circle cx="73" cy="61" r="1" fill="#1E2036" />
		<circle cx="85" cy="61" r="1" fill="#1E2036" />
	</svg>
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

		.dl-triangle-vector {
			z-index: -1;
			position: absolute;
			right: 10rem;
			top: 10rem;
			width: 15rem;
			height: auto;
		}

		.dl-semicircle-vector {
			z-index: -1;
			position: absolute;
			left: 0;
			top: 15rem;
			width: 25rem;
			height: auto;
		}

		.dl-grids-vector {
			z-index: -1;
			position: absolute;
			top: 12rem;
			left: 25rem;
			width: 10rem;
			height: auto;
		}
	}
</style>
