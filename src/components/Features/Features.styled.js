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
		margin-bottom: 90px;
		justify-content: unset;
	}
`;

export const Heading = styled(H3heading)`
	margin-bottom: 12px;

	@media ${media.minTablet} {
		margin-bottom: auto;
	}

	@media ${media.minDesktop} {
		margin-left: 187px;
		margin-right: 24px;
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




