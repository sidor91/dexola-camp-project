import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const StyledSection = styled.section`
width: 100%;
padding-top: 14px;
padding-bottom: 76px;
`
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

