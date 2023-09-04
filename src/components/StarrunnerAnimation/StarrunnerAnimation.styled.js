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

const rippleOpacityAnimation = keyframes`
0%{opacity: 0}
1%{opacity: 1}
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
	/* box-shadow: inset 0 0 20px var(--color-accent-blue); */
	position: absolute;
	opacity: 0;

	&:nth-child(2) {
		width: 40px;
		height: 20px;
		animation: ${rippleAnimation1} 3000ms ease-in 1000ms forwards,
			${rippleOpacityAnimation} 6000ms linear 1000ms forwards;
	}

	&:nth-child(3) {
		width: 160px;
		height: 80px;
		animation: ${rippleAnimation2} 3000ms ease-in 1000ms forwards,
			${rippleOpacityAnimation} 6000ms linear 1000ms forwards;
	}

	&:nth-child(4) {
		width: 320px;
		height: 160px;
		animation: ${rippleAnimation3} 3000ms ease-in 1000ms forwards,
			${rippleOpacityAnimation} 6000ms linear 1000ms forwards;
	}

	&:nth-child(5) {
		width: 640px;
		height: 320px;
		animation: ${rippleAnimation4} 3000ms ease-in 1000ms forwards,
			${rippleOpacityAnimation} 6000ms linear 1000ms forwards;
	}

	&:nth-child(6) {
		width: 1280px;
		height: 640px;
		animation: ${rippleAnimation5} 3000ms ease-in 1000ms forwards,
			${rippleOpacityAnimation} 6000ms linear 1000ms forwards;
	}

	&:nth-child(7) {
		width: 10px;
		height: 20px;
		animation: ${rippleAnimationVertical} 4000ms ease-in 1000ms forwards,
			${rippleOpacityAnimation} 6000ms linear 1000ms forwards;
	}
`;

const arrowContainerAnimation = keyframes`
0% {
    border-color: transparent;
    opacity: 0;
  }
  100% {
    border-color: var(--color-white);
    opacity: 1;
  }
`;

export const ArrowDownAnimationContainer = styled.div`
	position: absolute;
	bottom: 47px;
	right: 76px;
	border-radius: 50%;
	border: 1px solid transparent;
	animation: ${arrowContainerAnimation} 2s ease-in 5s forwards;

	width: 88px;
	height: 88px;
`;

const arrowAnimation1 = keyframes`
0% {
    opacity: 0.3; border-color: var(--color-white);
  }
50% { opacity: 1;} 
  100% {
    opacity: 0.3;
  }
`;

const arrowAnimation2 = keyframes`
0% {
    opacity: 0; border-color: transparent;
  }
50% { opacity: 1; 	border-color: var(--color-white);}
  100% {
    opacity: 0;  border-color: transparent;
  }
`;

export const ArrowDiv1 = styled.div`
	width: 12px;
	height: 12px;
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translateX(-50%) rotate(45deg);
	border-right-width: 1px;
	border-right-style: solid;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	opacity: 0;

	animation: ${arrowAnimation1} 2000ms ease-in-out 5000ms infinite forwards;
`;

export const ArrowDiv2 = styled(ArrowDiv1)`
	top: 40%;
	animation-name: ${arrowAnimation2};
	animation-delay: 5300ms;
`;

export const ArrowDiv3 = styled(ArrowDiv1)`
	top: 50%;
	animation-name: ${arrowAnimation2};
	animation-delay: 5600ms;
`;
