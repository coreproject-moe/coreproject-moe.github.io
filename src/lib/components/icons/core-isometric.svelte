<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";
	const { ...props }: SVGAttributes<SVGElement> = $props();
</script>

<svg {...props} viewBox="0 0 480 680" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g class="group peer" id="Group_2">
		<path class="fill-color-003 group-hover:fill-color-004 transition-colors duration-300" id="Vector" d="M160 240L240 200L320 240L240 280L160 240Z" />
		<path class="fill-color-001 group-hover:fill-color-005 transition-colors duration-300" id="Vector_2" d="M160 240L240 280V360L160 320V240Z" />
		<path class="fill-color-002 group-hover:fill-color-006 transition-colors duration-300" id="Vector_3" d="M240 280L320 240V320L240 360V280Z" />
	</g>
	<g class="group peer" id="Group_3">
		<path class="fill-color-003 group-hover:fill-color-004 transition-colors duration-300" id="Vector_4" d="M80 280L160 240L240 280L160 320L80 280Z" />
		<path class="fill-color-001 group-hover:fill-color-005 transition-colors duration-300" id="Vector_5" d="M80 280L160 320V400L80 360V280Z" />
		<path class="fill-color-002 group-hover:fill-color-006 transition-colors duration-300" id="Vector_6" d="M160 320L240 280V360L160 400V320Z" />
	</g>
	<g class="group peer" id="Group_4">
		<path class="fill-color-003 group-hover:fill-color-004 transition-colors duration-300" id="Vector_7" d="M0 400L80 360L160 400L80 440L0 400Z" />
		<path class="fill-color-001 group-hover:fill-color-005 transition-colors duration-300" id="Vector_8" d="M0 400L80 440V520L0 480V400Z" />
		<path class="fill-color-002 group-hover:fill-color-006 transition-colors duration-300" id="Vector_9" d="M80 440L160 400V480L80 520V440Z" />
	</g>
	<g class="group peer" id="Group_5">
		<path class="fill-color-003 group-hover:fill-color-004 transition-colors duration-300" id="Vector_10" d="M240 280L320 240L400 280L320 320L240 280Z"/>
		<path class="fill-color-001 group-hover:fill-color-005 transition-colors duration-300" id="Vector_11" d="M240 280L320 320V400L240 360V280Z" />
		<path class="fill-color-002 group-hover:fill-color-006 transition-colors duration-300" id="Vector_12" d="M320 320L400 280V360L320 400V320Z" />
	</g>
	<g class="group peer" id="Group_6">
		<path class="fill-color-003 group-hover:fill-color-004 transition-colors duration-300" id="Vector_13" d="M320 400L400 360L480 400L400 440L320 400Z" />
		<path class="fill-color-001 group-hover:fill-color-005 transition-colors duration-300" id="Vector_14" d="M320 400L400 440V520L320 480V400Z" />
		<path class="fill-color-002 group-hover:fill-color-006 transition-colors duration-300" id="Vector_15" d="M400 440L480 400V480L400 520V440Z" />
	</g>
	<g class="group peer" id="Group_7">
		<path class="fill-color-003 group-hover:fill-color-004 transition-colors duration-300" id="Vector_16" d="M80 520L160 480L240 520L160 560L80 520Z" />
		<path class="fill-color-001 group-hover:fill-color-005 transition-colors duration-300" id="Vector_17" d="M80 520L160 560V640L80 600V520Z" />
		<path class="fill-color-002 group-hover:fill-color-006 transition-colors duration-300" id="Vector_18" d="M160 560L240 520V600L160 640V560Z" />
	</g>
	<g class="group peer" id="Group_8">
		<path class="fill-color-003 group-hover:fill-color-004 transition-colors duration-300" id="Vector_19" d="M240 520L320 480L400 520L320 560L240 520Z" />
		<path class="fill-color-001 group-hover:fill-color-005 transition-colors duration-300" id="Vector_20" d="M240 520L320 560V640L240 600V520Z" />
		<path class="fill-color-002 group-hover:fill-color-006 transition-colors duration-300" id="Vector_21" d="M320 560L400 520V600L320 640V560Z" />
	</g>
	<g class="group peer" id="Group_9">
		<path class="fill-color-003 group-hover:fill-color-004 transition-colors duration-300" id="Vector_22" d="M160 560L240 520L320 560L240 600L160 560Z" />
		<path class="fill-color-001 group-hover:fill-color-005 transition-colors duration-300" id="Vector_23" d="M160 560L240 600V680L160 640V560Z" />
		<path class="fill-color-002 group-hover:fill-color-006 transition-colors duration-300" id="Vector_24" d="M240 600L320 560V640L240 680V600Z" />
	</g>
	<g class="hover:translate" id="Group_10">
		<path class="fill-[#EDD78C] transition-colors duration-300" id="Vector_25" d="M160 40L240 0L320 40L240 80L160 40Z" />
		<path class="fill-[#FFFFBD] transition-colors duration-300" id="Vector_26" d="M160 40L240 80V160L160 120V40Z" />
		<path class="fill-[#B9A65E] transition-colors duration-300" id="Vector_27" d="M240 80L320 40V120L240 160V80Z" />
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

	#Group_10 {
		&:hover #Vector_25, &:hover #Vector_26, &:hover #Vector_27 {
			transform: translate3d(25px, 0, 0) scale(0.9);
			transition: all 0.2s linear;
		}
		#Vector_25, #Vector_26, #Vector_27 {
			transform: translate3d(0, 0, 0) scale(1);
			transition: all 0.2s linear;
		}
	}

	#Group_4 {
		&:hover{
			#Group_3 path {
				&.fill-color-003 {
					fill: #C505FF;
				}
				&.fill-color-001 {
					fill: #FD59FF;
				}
				&.fill-color-002 {
					fill: #8E00CB;
				}
			}
			path {
				&.fill-color-003 {
					fill: #C505FF;
				}
				&.fill-color-001 {
					fill: #FD59FF;
				}
				&.fill-color-002 {
					fill: #8E00CB;
				}
			}
		}
	}
</style>
