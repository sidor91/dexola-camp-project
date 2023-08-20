import styled from "styled-components";
import { media } from "../../utils/mediaRules";


export const InformationContainer = styled.div`
	margin-bottom: 24px;
	@media ${media.minTablet} {
		margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
	}

	@media ${media.minDesktop} {
		padding-left: 187px;
		margin-bottom: 90px;
	}
`;

export const Heading = styled.h3`
	font: var(--font-subtitle-mobile);
	display: flex;
    margin-bottom: 12px;
    

	@media ${media.minTablet} {
		flex-direction: column;
        margin-bottom: auto;
		font: var(--font-subtitle-tablet);
	}

	@media ${media.minDesktop} {
		flex-direction: row;
		font: var(--font-subtitle-web);
	}
`;

export const Paragraph = styled.p`
	display: block;
	width: 100%;
	font: var(--font-body-mobile);
	color: var(--color-light-grey);

	@media ${media.minTablet} {
		width: 460px;
		font: var(--font-body-tablet);
	}

	@media ${media.minDesktop} {
		width: 601px;
		font: var(--font-body-web);
	}
`;

export const CardsContainer = styled.ul`
width: 100%;
	@media ${media.minTablet} {
		display: flex;
		gap: 16px;
	}

	@media ${media.minDesktop} {
		gap: 40px;
	}
`;

export const Card = styled.li`
	width: 100%;
	border: 1px solid var(--color-accent-blue);
	margin-bottom: 16px;

	@media ${media.minTablet} {
		margin-bottom: 0;
		width: 33.33%;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 236px;

	@media ${media.minTablet} {
		height: 240px;
	}

	@media ${media.minDesktop} {
		height: 307px;
	}
`;

export const CardDescriptionContainer = styled.div`
	padding: 16px 24px;
	display: flex;
	flex-direction: column;
	gap: 0;
	height: 204px;
	box-sizing: border-box;

	@media ${media.minTablet} {
		padding-left: 16px;
		padding-right: 16px;
		height: 298px;
	}

	@media ${media.minDesktop} {
		padding-top: 24px;
		padding-bottom: 24px;
		height: 258px;
	}
`;

export const CardDescriptionHeading = styled(Heading)`
	display: flex;
    margin-bottom: 16px;

	@media screen and (min-width: var(--width-tablet)) and (max-width: (var(--width-web)-1px)) {
		flex-direction: column;
	}
`;

export const CardDescriptionParagraph = styled(Paragraph)`
	width: 100%;

	@media ${media.minTablet} {
		margin-bottom: 16px;
	}
`;

export const CardNumber = styled.span`
	margin-right: 16px;

	@media ${media.minTablet} {
		margin-bottom: 4px;
	}
`;

