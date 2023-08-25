import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { H2heading } from "../SharedElements.styled";

export const StyledSection = styled.section`
	width: 100%;
	box-sizing: border-box;
	min-width: var(--width-mobile);
	max-width: var(--width-web);

	@media ${media.minTablet} {
		padding-left: 24px;
		padding-right: 24px;
	}

	@media ${media.minDesktop} {
		padding-left: 120px;
		padding-right: 120px;
	}
`;

export const StyledSectionHeader = styled(H2heading)`
	display: flex;
	justify-content: space-between;
	padding: 0 24px 16px;
	border-bottom: 1px solid var(--color-white);

	@media ${media.minTablet} {
		padding-left: 0;
		padding-right: 0;
		padding-bottom: 16px;
	}
`;

// export const Container = styled.div`
// 	width: 100%;
// 	padding-left: 24px;
// 	padding-right: 24px;
// 	/* padding: 14px 24px 76px; */
// 	box-sizing: border-box;

// 	@media ${media.minTablet} {
// 		padding-left: 0;
// 		padding-right: 0;
// 	}
// `;



