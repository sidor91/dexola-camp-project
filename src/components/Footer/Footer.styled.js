import styled from "styled-components";
import { media } from "@/utils/mediaRules";
import { Paragraph } from "@/components/SharedElements.styled";

export const StyledFooter = styled.footer`
	min-width: var(--width-mobile);
	width: 100%;

	border-top: 1px solid var(--color-accent-blue);
`;

export const Container = styled.div`
	max-width: var(--width-web);
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	position: relative;

	@media ${media.minTablet} {
		flex-direction: row-reverse;
		justify-content: center;
		padding-left: 24px;
		padding-right: 24px;
	}

	@media ${media.minDesktop} {
		padding-left: 120px;
		padding-right: 120px;
		height: 100px;
	}
`;

export const SocialContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	/* height: 56px; */

	box-sizing: border-box;
	padding-top: 12px;
	padding-bottom: 12px;

	@media ${media.minTablet} {
		height: fit-content;
		margin-bottom: 0;
		padding-top: 34px;
		padding-bottom: 34px;
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

export const DesignAndCopyContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 8px;
	padding-bottom: 34px;

	@media ${media.minTablet} {
		width: 50%;
		padding-top: 0;
		padding-bottom: 0;
	}

	@media ${media.minDesktop} {
		width: 100%;
		height: 100%;
		flex-direction: row;
	}
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

export const Icon = styled.img`
	width: 32px;
	height: 32px;
`;

export const Text = styled(Paragraph)`
	@media ${media.minDesktop} {
		color: var(--white-color);
	}
`;
