import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import Marquee from "react-fast-marquee";

export const StyledHero = styled.section`
	width: 100%;
	padding: 9px 15px 90px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	@media ${media.minTablet} {
		padding-bottom: 134px;
		padding-left: 24px;
		padding-right: 24px;
	}

	@media ${media.minDesktop} {
		padding: 0 120px;
		margin-bottom: 469px;
		justify-content: space-between;
		flex-direction: row-reverse;
		border-top: 1px solid var(--color-accent-blue);
		border-bottom: 1px solid var(--color-accent-blue);
	}
`;



export const ImagesContainer = styled.div`
	display: flex;
	width: 100%;
	height: 311px;

	@media ${media.minDesktop} {
		width: 466px;
		margin-right: unset;
	}
`;

export const StyledImage = styled.div`
	width: 50%;
	height: 100%;
	border: 1px solid var(--color-accent-blue);
	background-size: cover;
	background-position: center;
	transition: background-image 2s ease;

	@media ${media.minTablet} {
		background-position: unset;
	}
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

	display: block;
	width: 361px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 179px;

	@media ${media.minTablet} {
		font: var(--font-body-tablet);
		width: 696px;
		margin-top: 306px;
	}

	@media ${media.minDesktop} {
		font: var(--font-body-web);

		width: 640px;
		margin-right: unset;
		margin-left: 24px;
		margin-top: 159px;
	}
`;
