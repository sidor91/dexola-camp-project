import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const StyledJoinNowBtn = styled.a`
	padding: 10px 16px;
	display: flex;
	background-color: var(--color-button);
	color: var(--color-white);
	text-decoration: none;

	font: var(--font-join-button-mobile);
	letter-spacing: 0.28px;

	@media ${media.minTablet} {
		padding: 12px 67px;
		font: var(--font-join-button-web-tablet);
	}
`;

export const StyledIcon = styled.img`
	width: 24px;
	height: 17px;
	margin-right: 8px;
	margin-top: auto;
	margin-bottom: auto;
`;
