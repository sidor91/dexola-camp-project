import styled, { keyframes } from "styled-components";
import { H3heading, H2heading } from "@/components/SharedElements.styled";
import background from "./StarRunnerBackground.png";

export const Section = styled.section`
	width: 100%;
	height: 731px;
	display: flex;
	padding-top: 50px;
	padding-bottom: 50px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	background-image: url(${background});
	background-position: center;
	backdrop-filter: blur(36.5px);
`;

const textOpacityAnimation = keyframes`
0%{opacity: 0}
100%{opacity: 1}
`;

export const Container = styled.div`
	display: flex;
	width: 968px;
	height: 621px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	border: 2px solid var(--color-accent-blue);
	border-radius: 50%;
	opacity: 0;
	animation: ${textOpacityAnimation} 3000ms ease-in 1000ms forwards;
`;

export const Subheading = styled(H3heading)`
	text-transform: uppercase;
	font-size: 24px;
	font: var(--font-additional-animation-subheading);
`;

export const MainHeading = styled(H2heading)`
	text-transform: uppercase;
	font-size: 64px;
	font: var(--font-additional-animation-heading);
`;
