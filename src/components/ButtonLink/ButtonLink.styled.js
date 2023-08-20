import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const StyledButtonLink = styled.a`
    width: 136px;
	padding: 10px 0;
	display: flex;
	background-color: var(--color-button);
	color: var(--color-white);
	text-decoration: none;
	justify-content: center;

	font: var(--font-button-link-mobile);
	letter-spacing: 0.28px;

	@media ${media.minTablet} {
		padding: 12px 0;
		font: var(--font-button-link-web-tablet);
	}
`;

export const StyledIcon = styled.img`
	width: 24px;
	height: 17px;
	margin-right: 8px;
	margin-top: auto;
	margin-bottom: auto;
`;
