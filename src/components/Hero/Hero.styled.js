import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { Paragraph } from "../SharedElements.styled";

export const StyledHero = styled.section`
	width: 100%;
	padding-top: 9px;
	padding-bottom: 134px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	@media ${media.minTablet} {
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

export const StyledParagraph = styled(Paragraph)`
	margin-left: 15px;
	display: block;
	width: 100%;

	@media ${media.minTablet} {
		margin-left: 0;
	}

	@media ${media.minDesktop} {
		width: 640px;
		margin: 159px 0 24px 0;
	}
`;
