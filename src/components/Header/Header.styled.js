import styled from "styled-components";
import { media } from "@/utils/mediaRules";
import { ButtonLink } from "@/components/SharedElements.styled";

export const StyledHeader = styled.header`
	min-width: var(--width-mobile);
	max-width: 100%;
	box-sizing: border-box;
	position: sticky;
	top: 0;
	z-index: 999;
	background-color: var(--color-background);
`;

export const Container = styled.div`
	max-width: var(--width-web);
	padding: 4px 24px;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	align-items: center;
	margin-left: auto;
	margin-right: auto;

	@media ${media.minTablet} {
		padding-top: 15px;
		padding-bottom: 15px;
	}

	@media ${media.minDesktop} {
		padding-left: 120px;
		padding-right: 120px;
	}
`;

export const StyledButtonLink = styled(ButtonLink)`
	padding: 10px 16px;

	@media ${media.minTablet} {
		padding: 12px 67px;
	}
`;

export const ArrowUpIcon = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 12px;
	margin-top: auto;
	margin-bottom: auto;

	@media ${media.minTablet} {
		margin-right: 6.45px;
	}
`;

export const LogoIcon = styled.img`
	width: 34.5px;
	height: 19.5px;
`;
