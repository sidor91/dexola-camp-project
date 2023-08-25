import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { H3heading, Paragraph } from "../SharedElements.styled"; 

export const Container = styled.div`
	width: 100%;
	padding-left: 24px;
	padding-right: 24px;
	padding-bottom: 89px;
	/* padding: 14px 24px 76px; */
	box-sizing: border-box;

	@media ${media.minTablet} {
		padding-left: 0;
		padding-right: 0;
	}
	@media ${media.minDesktop} {
		padding-bottom: 191px;
	}
`;



export const InformationContainer = styled.div`
	margin-bottom: 24px;
	margin-top: 32px;

	@media ${media.minTablet} {
		margin-bottom: 40px;
		margin-top: 56px;
		display: flex;
		justify-content: space-between;
	}

	@media ${media.minDesktop} {
		margin-top: 90px;
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

export const StyledParagraph = styled(Paragraph)`
	display: block;
	width: 100%;

	@media ${media.minTablet} {
		width: 460px;
	}

	@media ${media.minDesktop} {
		width: 601px;
	}
`;




