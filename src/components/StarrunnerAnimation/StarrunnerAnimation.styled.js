import styled, { keyframes, css } from "styled-components";
import { H3heading, H2heading } from "@/components/SharedElements.styled";

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
	background-image: url("src/assets/Pics/StarRunnerBackground.png");
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
	${props =>
    props.$animationActive &&
    css`
      animation: ${textOpacityAnimation} 3000ms ease-in;
    `}
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

const rippleOpacityAnimation = keyframes`
0%{opacity: 0}
30%{opacity: 1}
100%{opacity: 0}
`;

const rippleAnimation1 = keyframes`
100%{width: 7511px; height: 3796px;}
`;

const rippleAnimation2 = keyframes`
100%{width: 11166px; height: 5603px; }
`;

const rippleAnimation3 = keyframes`
100%{width: 13937px; height: 7732px;}
`;

const rippleAnimation4 = keyframes`
100%{width: 16709px; height: 10463px;}
`;

const rippleAnimation5 = keyframes`
100%{width: 19962px; height: 12391px;}
`;

const rippleAnimationVertical = keyframes`
100%{width: 2832px; height: 3946px;}
`;


export const RippleEllipse = styled.div`
	border-radius: 50%;
	border: 6px solid var(--color-accent-blue);
	position: absolute;
	${(props) =>
		props.$animationActive &&
		css`
			animation: ${rippleOpacityAnimation} 6000ms forwards;
		`}

	&:nth-child(2) {
		width: 40px;
		height: 20px;
		${(props) =>
			props.$animationActive &&
			css`
				animation: ${rippleAnimation1} 6000ms forwards;
			`}
	}

	&:nth-child(3) {
		width: 160px;
		height: 80px;
		${(props) =>
			props.$animationActive &&
			css`
				animation: ${rippleAnimation2} 6000ms forwards;
			`}
	}

	&:nth-child(4) {
		width: 320px;
		height: 160px;
		${(props) =>
			props.$animationActive &&
			css`
				animation: ${rippleAnimation3} 6000ms forwards;
			`}
	}

	&:nth-child(5) {
		width: 640px;
		height: 320px;
		${(props) =>
			props.$animationActive &&
			css`
				animation: ${rippleAnimation4} 6000ms forwards;
			`}
	}

	&:nth-child(6) {
		width: 1280px;
		height: 640px;
		${(props) =>
			props.$animationActive &&
			css`
				animation: ${rippleAnimation5} 6000ms forwards;
			`}
	}

	&:nth-child(7) {
		width: 10px;
		height: 20px;
		${(props) =>
			props.$animationActive &&
			css`
				animation: ${rippleAnimationVertical} 7000ms forwards;
			`}
	}
`;
