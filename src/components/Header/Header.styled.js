import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const StyledHeader = styled.header`

`;

export const HeaderContainer = styled.div`
	width: 345px;
	padding: 4px 15px;
	display: flex;
	justify-content: space-between;
	margin-left: auto;
	margin-right: auto;
	box-sizing: border-box;

	@media ${media.minTablet} {
		width: 744px;
		padding: 15px 32px;
	}

	@media ${media.minDesktop} {
		width: 1200px;
	}
`;
