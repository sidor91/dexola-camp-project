import styled from "styled-components";
import { media } from "../../../utils/mediaRules";
import { H3heading, Paragraph, ButtonLink } from "../../SharedElements.styled";

export const Card = styled.li`
	width: 100%;
	border: 1px solid var(--color-accent-blue);
	display: flex;
	flex-direction: column;

	&:not(:last-child) {
		margin-bottom: 16px;

		@media ${media.minTablet} {
			margin-bottom: 0;
		}
	}

	@media ${media.minTablet} {
		width: 33.33%;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;

	@media ${media.minTablet} {
		height: 240px;
	}

	@media ${media.minDesktop} {
		height: 307px;
	}
`;

export const CardDescriptionContainer = styled.div`
	padding: 16px;
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 16px;
	box-sizing: border-box;

	@media ${media.minTablet} {
		gap: 0;
		/* padding-left: 16px;
		padding-right: 16px; */
	}

	@media ${media.minDesktop} {
		padding-top: 24px;
		padding-bottom: 24px;
		height: 258px;
	}
`;

export const CardDescriptionHeading = styled(H3heading)`
	display: flex;

	@media ${media.minTablet} {
		margin-bottom: 16px;
		flex-direction: column;
	}

	@media ${media.minDesktop} {
		flex-direction: row;
	}
`;

export const CardDescriptionParagraph = styled(Paragraph)`
	width: 100%;
	margin-bottom: 8px;

	@media ${media.minTablet} {
		margin-bottom: 16px;
	}
`;

export const CardNumber = styled.span`
	margin-right: 16px;

	@media ${media.minTablet} {
		margin-bottom: 4px;
	}

	@media ${media.minDesktop} {
		margin-bottom: 0;
	}
`;

export const StyledButtonLink = styled(ButtonLink)`
	width: 100%;
	margin-top: auto;
	padding-top: 12px;
	padding-bottom: 12px;
	/* margin-left: auto;
	margin-right: auto; */

	/* @media ${media.minTablet} {
		width: 189px;
	} */

	@media ${media.minDesktop} {
		width: 325px;
	}
`;

export const StyledIcon = styled.img`
	width: 24px;
	height: 17px;
	margin-right: 8px;
	margin-top: auto;
	margin-bottom: auto;
`;

