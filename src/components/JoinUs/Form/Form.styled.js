import styled from "styled-components";
import { media } from "@/utils/mediaRules";
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
		width: 50%;
		margin-left: 66px;
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

	/* border-bottom: 1px solid var(--color-white); */
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
	border: none;
	padding-top: 12px;
	padding-bottom: 12px;
	padding-left: calc(50% - 20.5px);
	width: 100%;
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
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: ${(prop) =>
		prop.$iserror ? "var(--color-warning-rose)" : "var(--color-white)"};

	&:focus-within {
		border-bottom-color: var(--color-accent-blue);
	}

	&:hover {
		border-bottom-color: var(--color-accent-blue);
	}
`;

export const IconAsterisk = styled.img`
	width: 10px;
	height: auto;
	position: absolute;
	top: 14px;
	left: 0;
`;

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
	cursor: pointer;
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
			left: -23.2px;
		}

		@media ${media.minDesktop} {
		}
	}
`;

export const ErrorMessage = styled.span`
	font: var(--font-form-error-message);
	position: absolute;
	top: 44px;
	left: 0;
	color: var(--color-warning-rose);
`;
