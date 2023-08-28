import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { Paragraph } from "../SharedElements.styled";

export const StyledHero = styled.section`
	width: 100%;
	padding: 9px 24px 148px;
	padding-top: 9px;
	padding-bottom: 148px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	@media ${media.minDesktop} {
		padding: 0 120px;
		margin-bottom: 546px;
		justify-content: space-between;
		flex-direction: row-reverse;
		border-top: 1px solid var(--color-accent-blue);
		border-bottom: 1px solid var(--color-accent-blue);
	}
`;

export const StyledParagraph = styled(Paragraph)`
	display: block;
	width: calc(100%-15px);

	@media ${media.minTablet} {
		margin-left: 0;
		width: 100%;
	}

	@media ${media.minDesktop} {
		width: 640px;
		margin: 159px 0 24px 0;
	}
`;
