import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import Marquee from "react-fast-marquee";

export const StyledHero = styled.div`
	/* width: var(--width-mobile); */
	padding-top: 9px;
	/* padding-left: 7px;
	padding-right: 7px; */
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
    width: 100%;
	/* position: relative; */

	/* @media ${media.minTablet} {
		width: var(--width-tablet);
		padding-left: 24px;
		padding-right: 24px;
	} */

	@media ${media.minDesktop} {
		/* width: var(--width-web); */
		padding-top: 0;
		/* padding-left: 120px; */
		/* padding-right: 120px; */
		justify-content: space-between;
		flex-direction: row-reverse;
	}
`;

export const ImagesContainer = styled.div`
	display: flex;
	width: 100%;
	height: 311px;
	margin-left: auto;
	margin-right: auto;

	@media ${media.minTablet} {
		/* width: 696px; */
	}

	@media ${media.minDesktop} {
		width: 466px;
		margin-right: unset;
	}
`;

export const StyledImage = styled.img`
	width: 50%;
	height: 100%;
	border: 1px solid var(--color-accent-blue);
`;

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

export const StyledParagraph = styled.p`
	font: var(--font-body-mobile);
	letter-spacing: -0.28px;
	display: block;
	width: 361px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 179px;

	@media ${media.minTablet} {
		font: var(--font-body-tablet);
		letter-spacing: -0.32px;
		width: 696px;
		margin-top: 306px;
	}

	@media ${media.minDesktop} {
		font: var(--font-body-web);
		letter-spacing: -0.36px;
		width: 640px;
		margin-right: unset;
		margin-left: 24px;
		margin-top: 159px;
	}
`;

