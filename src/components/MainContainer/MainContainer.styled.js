import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const StyledMainContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-width: var(--width-mobile);
	max-width: var(--width-web);
	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;
	position: relative;
	overflow: hidden;
`;