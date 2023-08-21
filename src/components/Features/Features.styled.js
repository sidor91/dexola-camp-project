import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { H3heading, StyledParagraph } from "../SharedElements.styled"; 


export const InformationContainer = styled.div`
	margin-bottom: 24px;
	@media ${media.minTablet} {
		margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
	}

	@media ${media.minDesktop} {
		padding-left: 187px;
		margin-bottom: 90px;
	}
`;

export const Heading = styled(H3heading)`
	display: flex;
	margin-bottom: 12px;

	@media ${media.minTablet} {
		flex-direction: column;
		margin-bottom: auto;
	}

	@media ${media.minDesktop} {
		flex-direction: row;
	}
`;

export const Paragraph = styled(StyledParagraph)`
	display: block;
	width: 100%;

	@media ${media.minTablet} {
		width: 460px;
	}

	@media ${media.minDesktop} {
		width: 601px;
	}
`;




