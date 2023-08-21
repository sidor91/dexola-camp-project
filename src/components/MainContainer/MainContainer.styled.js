import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const StyledMainContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: var(--width-mobile);
	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;
	position: relative;
	padding-left: 15px;
	padding-right: 15px;

	@media ${media.minTablet} {
		width: var(--width-tablet);
		padding-left: 24px;
		padding-right: 24px;
	}

	@media ${media.minDesktop} {
		width: var(--width-web);
		padding-left: 120px;
		padding-right: 120px;
	}
`;