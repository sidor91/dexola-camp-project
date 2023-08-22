import styled from "styled-components";
import { media } from "../../utils/mediaRules";

export const StyledTable = styled.table`
width: 100%;
`

export const StyledThead = styled.thead`
display: none;

@media ${media.minTablet} {
    display: initial;
}
`

export const StyledTR = styled.tr`
	width: 100%;
	border-bottom: 1px solid var(--color-accent-blue);
`;

export const StyledTH = styled.th`

`

export const StyledTbody = styled.tbody`
width: 100%;
`

export const StyledTD = styled.td`
	display: flex;
	text-align: right;

	&::before {
		content: attr(label);
		font-weight: bold;
		text-align: left;

		
		@media ${media.minTablet} {
			display: none;
		}
	}

	@media ${media.minTablet} {
		display: initial;
	}
`;

export const PlayerContainer = styled.div`
	padding-top: 16px;
`;

export const SecondaryInformationContainer = styled.div`
padding-left: 104px;
 /* border-bottom: 1px solid var(--color-accent-blue); */
	padding-bottom: 16px;
`