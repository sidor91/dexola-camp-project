import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { Paragraph } from "../SharedElements.styled";

export const StyledHero = styled.section`
	width: 100%;
	box-sizing: border-box;

	@media ${media.minDesktop} {
		border-top: 1px solid var(--color-accent-blue);
		border-bottom: 1px solid var(--color-accent-blue);
		margin-bottom: 546px;
	}
`;

export const Container = styled.div`
	max-width: var(--width-web);
	padding-top: 9px;
	padding-bottom: 148px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	

	@media ${media.minDesktop} {
		padding: 0 120px;
		justify-content: space-between;
		flex-direction: row-reverse;
	}
`;

export const StyledParagraph = styled(Paragraph)`
	display: block;
	width: calc(100% - 48px);
	margin-left: auto;
	margin-right: auto;

	@media ${media.minDesktop} {
		width: 640px;
		margin: 159px 0 24px 0;
	}
`;
