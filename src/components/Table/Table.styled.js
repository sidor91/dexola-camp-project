import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { StyledParagraph, H3heading } from "../SharedElements.styled";


export const Table = styled.table`
	width: 100%;
	margin-top: 16px;
	border-collapse: collapse;
	box-sizing: border-box;
	table-layout: auto;

	////////////////
	/* border: 1px solid #2a2a2a; */
	////////////////

	@media ${media.minTablet} {
		margin-top: 40px;
	}
`;

export const THead = styled.th`
/* display: block; */
	border-bottom: 1px solid var(--color-accent-blue);
`;

export const HeadTR = styled.tr`
	display: block;
	padding-top: 12px;
	padding-bottom: 12px;
`;

export const THText = styled(H3heading)`
text-align: left;
@media ${media.minDesktop} {
	line-height: normal;
}
`;

export const ImageTD = styled.td`
	padding: 0;
	position: absolute;
	top: 50px;
	left: 0;

	@media ${media.minTablet} {
		position: initial;
	}
`;

export const ImageTH = styled.div`
	@media ${media.minTablet} {
		width: 16px;
	}
`;

export const Image = styled.img`
	width: 64px;
	height: 64px;
	border-radius: 60px;
`;


export const NameTH = styled(THText)`
display: block;
width: 208px;
`
export const RarityTh = styled(THText)`
	display: block;
	width: 84px;
`;

export const GamesTH = styled(THText)`
	display: block;
	width: 59px;
`;



export const WonTH = styled(THText)`
	display: block;
	width: 61px;
`;

export const PriceTH = styled(THText)`
	display: block;
	width: 50px;
`;

export const TR = styled.tr`
	display: block;
	//////////////
	/* border: 1px solid #2a2a2a; */
	//////////////
	border-bottom: 1px solid var(--color-accent-blue);
	position: relative;
	padding-top: 16px;
	padding-bottom: 16px;

	@media ${media.minTablet} {
		padding-top: 8px;
		padding-bottom: 8px;
		&:nth-child(odd) {
			background-color: #080b27;
		}
	}

	@media ${media.minDesktop} {
		padding-top: 11px;
		padding-bottom: 11px;
	}
`;

export const TH = styled.th`
	padding-left: 16px;
	padding-right: 16px;
	//////////////////
	/* border: 1px solid #2a2a2a; */
	/////////////////
	&:first-child {
		padding-left: 24px;
		padding-right: 24px;
	}

	&:last-child {
		padding-left: 24px;
		padding-right: 24px;
	}

`;


export const TD = styled.td`
	display: flex;
	text-align: right;
	padding: 0;
	////////////////
	/* border: 1px solid #2a2a2a; */
	////////////////

	&:not(:last-child):not(:nth-child(2)) {
		padding-bottom: 11px;
	}

	&::before {
		content: attr(label);
		text-align: left;
		font: var(--font-body-mobile);
		color: var(--color-light-grey);
		margin-left: 80px;

		@media ${media.minTablet} {
			display: none;
		}
	}

	@media ${media.minTablet} {
		display: table-cell;
		text-align: left;

		padding-top: 11px;
		padding-bottom: 11px;

		padding-left: 24px;
		padding-right: 24px;
		&:nth-child(3) {
			padding-left: 16px;
			padding-right: 16px;
		}

		/* &:first-child{
			padding-left: 16px;
			padding-right: 16px;
		} */
	}
`;



export const TDText = styled(StyledParagraph)`
	margin-left: auto;

	@media ${media.minTablet} {
		margin-left: initial;
	}
`;

export const DynamicTD = styled(TD)`
	padding-bottom: 12px;

	&::before {
		font: var(--font-subtitle-mobile);
		color: var(--color-white);
		font-size: 16px;
		margin-left: 0;
	}
`;



export const DynamicTDText = styled(TDText)`
	font: var(--font-subtitle-mobile);
	font-size: 16px;
	color: var(--color-white);
`;



export const NFTNameText = styled(StyledParagraph)`
	
	color: var(--color-white);
	display: block;
	width: 192px;
`;

export const RarityLevelText = styled(TDText)`
	
	@media ${media.minTablet} {
		
		display: block;
		width: 84px;
		color: var(--color-white);
	}
`;

export const GamesText = styled(TDText)`
	
	@media ${media.minTablet} {
		
		display: block;
		width: 43px;
		color: var(--color-white);
	}
`;

export const WonText = styled(TDText)`
	
	@media ${media.minTablet} {
		
		display: block;
		width: 45px;
		color: var(--color-white);
	}
`;

export const PriceText = styled(TDText)`
	
	@media ${media.minTablet} {
		
		display: block;
		width: 50px;
		color: var(--color-white);
	}
`;