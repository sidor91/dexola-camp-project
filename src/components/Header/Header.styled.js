import styled from "styled-components";
import {media} from '../../utils/mediaRules'

export const StyledHeader = styled.header`
	/* background-color: var(--color-background); */
	padding-top: 4px;
	padding-bottom: 4px;
	/* position: sticky; */

	
`;

export const HeaderContainer = styled.div`
	min-width: 345px;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	padding-left: 15px;
	padding-right: 15px;
	justify-content: space-between;

	@media ${media.minTablet} {
		width: 744px;
		padding: 15px 32px;
	}

	@media ${media.minDesktop} {
		width: 1200px;
	}
`;