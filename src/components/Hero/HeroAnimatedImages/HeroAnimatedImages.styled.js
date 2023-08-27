import styled from "styled-components";
import { media } from "../../../utils/mediaRules";

export const ImagesContainer = styled.div`
	display: flex;
	width: calc(100%-15px);
	min-height: 311px;
	margin-left: 15px;
	margin-bottom: 16px;

	@media ${media.minTablet} {
		margin-left: 0;
		width: 100%;
	}

	@media ${media.minDesktop} {
		width: 466px;
		margin-bottom: 0;
		height: 311px;
	}
`;

export const Container = styled.div`
	flex: 1;
	width: 100%;
	min-height: 311px;
	box-sizing: border-box;
	border: 1px solid var(--color-accent-blue);
	position: relative;
	padding-bottom: 50%;

	@media ${media.minDesktop} {
		height: 311px;
		padding-bottom: 0;
	}
`;

export const StyledImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

