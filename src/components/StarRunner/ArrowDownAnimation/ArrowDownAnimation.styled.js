import styled, { keyframes } from "styled-components";

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
	cursor: pointer;
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
