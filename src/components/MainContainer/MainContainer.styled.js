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

	@media ${media.minTablet} {
		width: var(--width-tablet);
	}

	@media ${media.minDesktop} {
		width: var(--width-web);
	}
`;