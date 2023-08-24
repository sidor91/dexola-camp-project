import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import Marquee from "react-fast-marquee";

export const StyledMarquee = styled(Marquee)`
	margin-bottom: 16px;
	overflow: hidden;

	@media ${media.minDesktop} {
		position: absolute;
		left: 0;
		top: 290px;
		margin-bottom: 0;
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
		margin-right: 1440px;
	}
`;