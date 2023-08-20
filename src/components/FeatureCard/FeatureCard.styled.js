import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { H3heading, StyledParagraph } from "../SharedElements.styled";

export const Card = styled.li`
	width: 100%;
	border: 1px solid var(--color-accent-blue);
	margin-bottom: 16px;

	@media ${media.minTablet} {
		margin-bottom: 0;
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
	display: flex;
	flex-direction: column;
	gap: 16px;
	box-sizing: border-box;

	@media ${media.minTablet} {
        gap:0;
		padding-left: 16px;
		padding-right: 16px;
		height: 298px;
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

export const CardDescriptionParagraph = styled(StyledParagraph)`
	width: 100%;
	margin-bottom: 8px;

	@media ${media.minTablet} {
		margin-bottom: 0;
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