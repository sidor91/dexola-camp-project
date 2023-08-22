import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { H2heading } from "../SharedElements.styled";

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

export const StyledSectionHeader = styled(H2heading)`
	display: flex;
	justify-content: space-between;
	padding-bottom: 16px;
	border-bottom: 1px solid var(--color-white);
`;



