import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { StyledParagraph, H3heading } from "../SharedElements.styled";


export const Table = styled.table`
	width: 100%;
	text-align: left;
	table-layout: auto;
	border-collapse: collapse;
	margin-top: 16px;

	@media ${media.minTablet} {
		margin-top: 56px;
	}

	@media ${media.minDesktop} {
		margin-top: 90px;
	}
`;

export const Thead = styled.thead`
	
`;

export const TH = styled.th`
	padding: 12px 16px;
	vertical-align: top;

	&:first-child {
		padding: 12px 24px;
		width: 64px;
		box-sizing: border-box;
	}

	&:last-child {
		padding: 12px 24px;
	}
`;

export const Tbody = styled.tbody``;

export const TR = styled.tr`
	padding-top: 16px;
	padding-bottom: 16px;
	display: block;
	border-bottom: 1px solid var(--color-accent-blue);
	position: relative;
	

	@media ${media.minTablet} {
		display: table-row;
		padding-top: 8px;
		padding-bottom: 8px;

		&:nth-child(odd) {
			background-color: #080b27;
		}
	}
`;

export const TD = styled.td`
	display: flex;

	&:not(:last-child) {
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

	&:nth-child(2) {
		position: absolute;
		top: 50px;
		left: 0;
	}

	@media ${media.minTablet} {
		display: table-cell;

		&:not(:first-child) {
			padding: 11px 24px;
		}

		&:nth-child(3) {
			padding: 11px 16px;
		}

		&:nth-child(2) {
			white-space: nowrap;
			position: initial;
		}
	}
`;

export const Image = styled.img`
	border-radius: 60px;
	width: 64px;
	height: 64px;

	@media ${media.minTablet} {
		margin-top: 8px;
		margin-bottom: 8px;
	}
`;

	
export const Title = styled(H3heading)`

`;
export const Text = styled(StyledParagraph)`
	margin-left: auto;

	

	@media ${media.minTablet} {
		margin-left: 0;
		padding-bottom: 0;
	}
`;

export const DynamicTD = styled(TD)`
 	&::before {
 		font: var(--font-subtitle-mobile);
 		color: var(--color-white);
 		font-size: 16px;
 		margin-left: 0;
 	}
 `;

 
export const DynamicTDText = styled(Text)`
	font: var(--font-subtitle-mobile);
	font-size: 16px;
	color: var(--color-white);
	padding-bottom: 1px;
`;

export const ImageTD = styled(TD)`
&::before {
	display: none;
}
`

export const NFTNameText = styled(Text)`
min-width: 185px;

@media ${media.minDesktop} {
	min-width: initial;
	width: 400px;
}
`