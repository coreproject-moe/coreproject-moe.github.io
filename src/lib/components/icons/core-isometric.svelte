<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";
	const { ...props }: SVGAttributes<SVGElement> = $props();
</script>

<svg {...props} viewBox="0 0 480 680" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g id="Group_2">
		<path id="Vector" d="M160 240L240 200L320 240L240 280L160 240Z" fill="#C505FF" />
		<path id="Vector_2" d="M160 240L240 280V360L160 320V240Z" fill="#FD59FF" />
		<path id="Vector_3" d="M240 280L320 240V320L240 360V280Z" fill="#8E00CB" />
	</g>
	<g id="Group_3">
		<path id="Vector_4" d="M80 280L160 240L240 280L160 320L80 280Z" fill="#C505FF" />
		<path id="Vector_5" d="M80 280L160 320V400L80 360V280Z" fill="#FD59FF" />
		<path id="Vector_6" d="M160 320L240 280V360L160 400V320Z" fill="#8E00CB" />
	</g>
	<g id="Group_4">
		<path id="Vector_7" d="M0 400L80 360L160 400L80 440L0 400Z" fill="#C505FF" />
		<path id="Vector_8" d="M0 400L80 440V520L0 480V400Z" fill="#FD59FF" />
		<path id="Vector_9" d="M80 440L160 400V480L80 520V440Z" fill="#8E00CB" />
	</g>
	<g id="Group_5">
		<path id="Vector_10" d="M240 280L320 240L400 280L320 320L240 280Z" fill="#C505FF" />
		<path id="Vector_11" d="M240 280L320 320V400L240 360V280Z" fill="#FD59FF" />
		<path id="Vector_12" d="M320 320L400 280V360L320 400V320Z" fill="#8E00CB" />
	</g>
	<g id="Group_6">
		<path id="Vector_13" d="M320 400L400 360L480 400L400 440L320 400Z" fill="#C505FF" />
		<path id="Vector_14" d="M320 400L400 440V520L320 480V400Z" fill="#FD59FF" />
		<path id="Vector_15" d="M400 440L480 400V480L400 520V440Z" fill="#8E00CB" />
	</g>
	<g id="Group_7">
		<path id="Vector_16" d="M80 520L160 480L240 520L160 560L80 520Z" fill="#C505FF" />
		<path id="Vector_17" d="M80 520L160 560V640L80 600V520Z" fill="#FD59FF" />
		<path id="Vector_18" d="M160 560L240 520V600L160 640V560Z" fill="#8E00CB" />
	</g>
	<g id="Group_8">
		<path id="Vector_19" d="M240 520L320 480L400 520L320 560L240 520Z" fill="#C505FF" />
		<path id="Vector_20" d="M240 520L320 560V640L240 600V520Z" fill="#FD59FF" />
		<path id="Vector_21" d="M320 560L400 520V600L320 640V560Z" fill="#8E00CB" />
	</g>
	<g id="Group_9">
		<path id="Vector_22" d="M160 560L240 520L320 560L240 600L160 560Z" fill="#C505FF" />
		<path id="Vector_23" d="M160 560L240 600V680L160 640V560Z" fill="#FD59FF" />
		<path id="Vector_24" d="M240 600L320 560V640L240 680V600Z" fill="#8E00CB" />
	</g>
	<g id="Group_10">
		<path id="Vector_25" d="M160 40L240 0L320 40L240 80L160 40Z" fill="#EDD78C" />
		<path id="Vector_26" d="M160 40L240 80V160L160 120V40Z" fill="#FFFFBD" />
		<path id="Vector_27" d="M240 80L320 40V120L240 160V80Z" fill="#B9A65E" />
	</g>
</svg>

<style lang="scss">
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@for $i from 2 through 10 {
		#Group_#{$i} {
			animation-delay: (10 - $i) * 250ms;
		}
	}

	g {
		animation: float 3s ease-in-out infinite;
	}
</style>
