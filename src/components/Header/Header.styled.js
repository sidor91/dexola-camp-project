import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { ButtonLink } from "../SharedElements.styled";


export const StyledHeader = styled.header`
	min-width: var(--width-mobile);
	max-width: var(--width-web);
	padding: 4px 15px;
	display: flex;
	justify-content: space-between;
	margin-left: auto;
	margin-right: auto;
	box-sizing: border-box;
	position: sticky;
	top: 0;
	z-index: 999;
	background-color: var(--color-background);
	box-sizing: border-box;

	@media ${media.minTablet} {
		padding: 15px 32px;
	}

	@media ${media.minDesktop} {
		padding-left: 120px;
		padding-right: 120px;
	}
`;

export const StyledButtonLink = styled(ButtonLink)`
	width: 136px;
	padding: 10px 0;

	@media ${media.minTablet} {
		padding: 12px 0;
		width: 235px;
	}
`;

export const StyledIcon = styled.img`
	width: 24px;
	height: 17px;
	margin-right: 8px;
	margin-top: auto;
	margin-bottom: auto;
`;

