import styled from "styled-components";
import { media } from "../../../utils/mediaRules";
import { Paragraph, H3heading } from "../../SharedElements.styled";
import { PiEye, PiEyeClosed } from "react-icons/pi";


export const StyledForm = styled.form`
	padding: 24px 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
	box-sizing: border-box;
	border: 1px solid var(--color-accent-blue);
	margin-top: 32px;

	@media ${media.minTablet} {
		padding: 55px 40px 54px;
		margin-top: 56px;
	}

	@media ${media.minDesktop} {
		margin-top: 0;
        padding-top: 54px;
        padding-bottom: 55px;
	}
`;

export const Input = styled.input`
	background-color: inherit;
	border: none;
	padding-top: 8px;
	padding-left: 30px;
	padding-bottom: 14px;

	color: var(--color-white);
	font: var(--font-body-mobile);
	box-sizing: border-box;
	width: 100%;

	&:focus {
		outline: none;
	}

	@media ${media.minTablet} {
		font: var(--font-body-tablet);
		padding-bottom: 11px;
	}

	@media ${media.minDesktop} {
		font: var(--font-body-web);
		padding-bottom: 8px;
	}
`;

export const SubmitButton = styled.button`
	text-transform: uppercase;
	display: flex;
	background-color: var(--color-button);
	color: var(--color-white);
	/* justify-content: center; */
	border: none;
	padding-top: 12px;
	padding-bottom: 12px;
	padding-left: 126px;
	width: 294px;
	cursor: pointer;

	font: var(--font-button-link-web-tablet);

	@media ${media.minTablet} {
		width: 235px;
		margin-right: auto;
		padding-left: 89.2px;
	}

	@media ${media.minDesktop} {
	}
`;

export const InputContainer = styled.div`
	margin-bottom: 28px;
	position: relative;
	border-bottom: 1px solid var(--color-white);
`;

export const IconAsterisk = styled.img`
width: 10px;
height: auto;
position: absolute;
top: 14px;
left: 0;
`

export const IconEye = styled(PiEye)`
width: 24px;
height: 24px;
`;

export const IconEyeClosed = styled(PiEyeClosed)`
	width: 24px;
	height: 24px;
`;

export const IconEyeContainer = styled.div`
	position: absolute;
	top: 8px;
	right: 0;
    width: 24px;
    height: 24px;
`;

export const ButtonText = styled.span`
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		transform: translateX(-50%);
		left: -21.8px;
		width: 22.5px;
		height: 1.5px;
		border-top: 1.5px solid white;

		@media ${media.minTablet} {
			width: 24px;
            left: -23.2px
		}

		@media ${media.minDesktop} {
		}
	}
`;