import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { Paragraph } from "../SharedElements.styled";

export const StyledFooter = styled.footer`
	min-width: var(--width-mobile);
	max-width: var(--width-web);
	height: 134px;
	display: flex;
	flex-direction: column;
	border-top: 1px solid var(--color-accent-blue);
	align-items: center;
	box-sizing: border-box;
	position: relative;
	margin-left: auto;
	margin-right: auto;

	@media ${media.minTablet} {
		height: 100px;
		flex-direction: row-reverse;
		padding: 10px 24px;
		justify-content: center;
	}

	@media ${media.minDesktop} {
		padding-left: 120px;
		padding-right: 120px;
	}
`;

export const SocialContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	height: 56px;
	margin-bottom: 8px;
	box-sizing: border-box;

	@media ${media.minTablet} {
		margin-bottom: 0;
		padding-left: 24px;
		gap: 24px;
		width: 50%;
	}

	@media ${media.minDesktop} {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		gap: 40px;
		border-right: 1px solid var(--color-accent-blue);
		border-left: 1px solid var(--color-accent-blue);
		width: fit-content;
		height: 100%;
		padding-left: 116px;
		padding-right: 116px;
	}
`;

export const Icon = styled.img`
	width: 32px;
	height: 32px;
`;

export const CopyrightContainer = styled.div`
	text-align: center;
	box-sizing: border-box;

	@media ${media.minTablet} {
		text-align: center;
		box-sizing: border-box;
		padding-right: 24px;
		text-align: left;
		width: 100%;
	}

	@media ${media.minDesktop} {
		width: 360px;
		display: flex;
		justify-content: end;
		flex: initial;
		margin-left: auto;
		padding-right: 0;
		align-items: center;
	}
`;

export const DesignedContainer = styled.div`
	text-align: center;
	box-sizing: border-box;
	margin-bottom: 4px;
	@media ${media.minTablet} {
		margin-bottom: 6px;
		padding-right: 24px;
		text-align: left;
		width: 100%;
	}

	@media ${media.minDesktop} {
		margin-bottom: 0;
		width: 360px;
		display: flex;
		margin-right: auto;
		padding-right: 0;
		align-items: center;
	}
`;

export const DesignAndCopyContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media ${media.minTablet} {
		width: 50%;
	}

	@media ${media.minDesktop} {
		width: 100%;
		height: 100%;
		flex-direction: row;
	}
`;

export const Text = styled(Paragraph)`
	@media ${media.minDesktop} {
		color: var(--white-color);
	}
`;
