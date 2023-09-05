import styled, { keyframes } from "styled-components";

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
	position: absolute;
	opacity: 0;

	&:nth-child(2) {
		width: 80px;
		height: 40px;
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