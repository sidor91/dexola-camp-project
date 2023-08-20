import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const Card = styled.li`
	width: 100%;

	@media ${media.minTablet} {
		width: 33.33%;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 236px;

	@media ${media.minTablet} {
		height: 240px;
	}

	@media ${media.minDesktop} {
		height: 307px;
	}
`;

export const CardDescriptionContainer = styled.div`
	padding: 16px 24px;

	@media ${media.minTablet} {
		padding-left: 16px;
		padding-right: 16px;
	}

	@media ${media.minDesktop} {
		padding-top: 24px;
		padding-bottom: 24px;
	}
`;

export const Heading = styled.h3`
	font: var(--font-subtitle-mobile);
	display: flex;

	@media ${media.minTablet} {
		flex-direction: column;
		font: var(--font-subtitle-tablet);
	}

	@media ${media.minDesktop} {
		flex-direction: row;
		font: var(--font-subtitle-web);
	}
`;

export const Paragraph = styled.p`
	display: block;
	width: 100%;
	font: var(--font-body-mobile);
	color: var(--color-light-grey);

	@media ${media.minTablet} {
		width: 460px;
		font: var(--font-body-tablet);
	}

	@media ${media.minDesktop} {
		width: 601px;
		font: var(--font-body-web);
	}
`;