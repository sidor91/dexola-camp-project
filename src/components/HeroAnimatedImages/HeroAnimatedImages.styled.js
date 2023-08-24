import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const ImagesContainer = styled.div`
	display: flex;
	width: 100%;
	height: 311px;
	margin-left: 15px;
	margin-bottom: 16px;

	@media ${media.minTablet} {
		margin-left: 0;
		width: 696px;
		margin-left: auto;
		margin-right: auto;
	}

	@media ${media.minDesktop} {
		width: 466px;
		margin-bottom: 0;
	}
`;

export const Container = styled.div`
	width: 50%;
	height: 100%;
	border: 1px solid var(--color-accent-blue);
	position: relative;
`;

export const StyledImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;


