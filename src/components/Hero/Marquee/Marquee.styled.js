import styled, { keyframes } from "styled-components";
import { media } from "@/utils/mediaRules";

export const MarqueeContainer = styled.div`
	overflow: hidden;
	@media ${media.minTablet} {
		margin-bottom: 13px;
	}

	@media ${media.minTablet} {
		margin-bottom: 0;
	}
`;

const marqueeAnimation = keyframes`
0%{transform: translateX(100%) }
100%{transform: translateX(-100%) }
`;

export const MarqueeText = styled.h1`
	font: var(--font-hero-animation-text-mobile);
	box-sizing: border-box;
	text-transform: uppercase;
	width: max-content;
	animation: ${marqueeAnimation} 7s linear;
	animation-iteration-count: infinite;
	overflow: hidden;

	@media ${media.minTablet} {
		font: var(--font-hero-animation-text-tablet);
	}

	@media ${media.minDesktop} {
		font: var(--font-hero-animation-text-web);
		position: absolute;
		left: 0;
		top: 290px;
	}
`;
