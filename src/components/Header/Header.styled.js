import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const StyledHeader = styled.header`
	width: var(--width-mobile);
	padding: 4px 7px 4px 15px;
	display: flex;
	justify-content: space-between;
	margin-left: auto;
	margin-right: auto;
	box-sizing: border-box;
	position: sticky;
	top: 0;
	z-index: 999;
	background-color: var(--color-background);

	@media ${media.minTablet} {
		width: var(--width-tablet);
		padding: 15px 32px;
	}

	@media ${media.minDesktop} {
		width: var(--width-web);
		padding-left: 120px;
		padding-right: 120px;
	}
`;

