import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import {StyledParagraph} from '../SharedElements.styled'

export const ImageContainer = styled.td`
padding: 0;
margin: 0;
width: fit-content;
`
export const StyledImage = styled.img`
position: absolute;
top: 50px;
left: 0;
width: 64px;
height: 64px;
border-radius: 60px;
`

export const StyledTable = styled.table`
width: 100%;
margin-top: 16px;
`

export const StyledThead = styled.thead`
display: none;

@media ${media.minTablet} {
    display: initial;
}
`

export const StyledTR = styled.tr`
	display: block;
	//////////////
	/* border: 1px solid #2a2a2a; */
    //////////////
	border-bottom: 1px solid var(--color-accent-blue);
	position: relative;
	padding-top: 16px;

	&:not(:last-child){
		
	}
	padding-bottom: 16px;
`;

export const StyledTH = styled.th`

`

export const StyledTbody = styled.tbody`

`

export const StyledTD = styled.td`
	display: flex;
	text-align: right;
	padding: 0;
	////////////////
	/* border: 1px solid #2a2a2a; */
	////////////////

	&:not(:last-child):not(:first-child) {
		padding-bottom: 7px;
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
		display: initial;
	}
`;

export const TDText = styled(StyledParagraph)`
	margin-left: auto;
`;

export const DynamicTD = styled(StyledTD)`
	padding-bottom: 12px;

	&::before {
		font: var(--font-subtitle-mobile);
		color: var(--color-white);
		font-size: 16px;
		margin-left: 0;
		padding-bottom: 0;
	}
`;



export const DynamicTDText = styled(TDText)`
	font: var(--font-subtitle-mobile);
	font-size: 16px;
	color: var(--color-white);
	padding-bottom: 0;
`;
