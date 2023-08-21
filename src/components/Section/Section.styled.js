import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const StyledSection = styled.section`
	width: 100%;
	padding: 14px 15px 76px;
	box-sizing: border-box;

	@media ${media.minTablet} {
		padding-left: 24px;
		padding-right: 24px;
	}

	@media ${media.minDesktop} {
		padding-left: 120px;
		padding-right: 120px;
	}
`;

export const StyledSectionHeader = styled.h2`
	font: var(--font-title-mobile);
	display: flex;
	justify-content: space-between;
	padding-bottom: 16px;
	margin-bottom: 32px;
	border-bottom: 1px solid var(--color-white);

	@media ${media.minTablet} {
		margin-bottom: 56px;
		font: var(--font-title-tablet);
	}

	@media ${media.minDesktop} {
		margin-bottom: 90px;
		font: var(--font-title-web);
	}
`;


