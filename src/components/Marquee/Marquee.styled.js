import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import Marquee from "react-fast-marquee";

export const StyledMarquee = styled(Marquee)`
	position: absolute;
	top: 340px;
	left: 0;
	overflow: hidden;

	@media ${media.minTablet} {
		top: 296px;
	}

	@media ${media.minDesktop} {
		top: 290px;
	}
`;

export const MarqueeText = styled.p`
	font: var(--font-hero-animation-text-mobile);
	text-transform: uppercase;
	margin-right: 375px;

	@media ${media.minTablet} {
		font: var(--font-hero-animation-text-tablet);
		margin-right: 744px;
	}

	@media ${media.minDesktop} {
		font: var(--font-hero-animation-text-web);
		margin-right: 1200px;
	}
`;