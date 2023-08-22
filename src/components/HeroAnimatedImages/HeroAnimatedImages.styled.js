import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const ImagesContainer = styled.div`
	display: flex;
	width: 100%;
	height: 311px;

	@media ${media.minDesktop} {
		width: 466px;
		margin-right: unset;
	}
`;

export const StyledImage = styled.div`
	width: 50%;
	height: 100%;
	border: 1px solid var(--color-accent-blue);
	background-size: cover;
	background-position: center;
	transition: background-image 2s ease;

	@media ${media.minTablet} {
		background-position: unset;
	}
`;