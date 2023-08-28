import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { H3heading, Paragraph } from "../SharedElements.styled"; 

export const Container = styled.div`
	width: 100%;
	padding: 32px 24px 89px;
	box-sizing: border-box;

	@media ${media.minTablet} {
		padding: 56px 0 90px;
	}

	@media ${media.minDesktop} {
		padding-top: 90px;
		padding-bottom: 191px;
	}
`;



export const InformationContainer = styled.div`
	margin-bottom: 24px;

	@media ${media.minTablet} {
		margin-bottom: 40px;
		display: flex;
		justify-content: center;
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
		margin-right: 72px;
	}

	@media ${media.minDesktop} {
		margin-left: 187px;
		margin-right: 24px;
	}
`;

export const StyledParagraph = styled(Paragraph)`
	display: block;
	width: 100%;

	@media ${media.minTablet} {
		width: 460px;
	}

	@media ${media.minDesktop} {
		width: 601px;
		margin-top: 6px;
	}
`;




