import styled from "styled-components";
import { media } from "@/utils/mediaRules";

export const H2heading = styled.h2`
	font: var(--font-title-mobile);
	color: var(--color-white);

	@media ${media.minTablet} {
		font: var(--font-title-tablet);
	}

	@media ${media.minDesktop} {
		font: var(--font-title-web);
	}
`;

export const H3heading = styled.h3`
	font: var(--font-subtitle-mobile);
	color: var(--color-white);

	@media ${media.minTablet} {
		font: var(--font-subtitle-tablet);
	}

	@media ${media.minDesktop} {
		font: var(--font-subtitle-web);
	}
`;

export const Paragraph = styled.p`
	font: var(--font-body-mobile);
	color: var(--color-light-grey);

	@media ${media.minTablet} {
		font: var(--font-body-tablet);
	}

	@media ${media.minDesktop} {
		font: var(--font-body-web);
	}
`;

export const ButtonLink = styled.a`
	display: flex;
	background-color: var(--color-button);
	color: var(--color-white);
	text-decoration: none;
	justify-content: center;
	opacity: 1;
	text-transform: uppercase;
	cursor: pointer;

	&:hover {
		background-color: var(--color-button-hover);
	}

	font: var(--font-button-link-mobile);

	@media ${media.minTablet} {
		font: var(--font-button-link-web-tablet);
	}
`;
