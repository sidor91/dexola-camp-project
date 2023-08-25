import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { Paragraph } from '../SharedElements.styled';

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

	@media ${media.minTablet} {
		flex-direction: row-reverse;
		padding: 10px 24px;
		justify-content: center;
	}

	@media ${media.minDesktop} {
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
		/* flex: 1; */
		padding-left: 24px;
		gap: 24px;
		width: 50%;
	}

	@media ${media.minDesktop} {
		flex: initial;
		/* position: absolute;
		top: 0;
		left: 480px; */
		padding-left: 0;
		width: 33.33%;
	}
`;

export const Icon = styled.img`
width: 32px;
height: 32px;
`

export const CopyrightContainer = styled.div`
	@media ${media.minTablet} {
		text-align: center;
		box-sizing: border-box;
		@media ${media.minTablet} {
			padding-right: 24px;
			text-align: left;
			width: 100%;
		}

		@media ${media.minDesktop} {
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex: initial;
			order: -1;
		}
	}
`;
export const Copyright = styled(Paragraph)`
	@media ${media.minDesktop} {
        
	}
`;
export const DesignedContainer = styled.div`
	text-align: center;
	box-sizing: border-box;
	@media ${media.minTablet} {
		padding-right: 24px;
		text-align: left;
		width: 1000%;
	}

	@media ${media.minDesktop} {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex: initial;
	}
`;

export const Designed = styled(Paragraph)`
	@media ${media.minDesktop} {
        
	}
`;


export const DesignAndCopyContainer = styled.div`
display: flex;
flex-direction: column;
`