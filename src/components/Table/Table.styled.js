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
	border-bottom: 1px solid var(--color-accent-blue);
`;

export const StyledTH = styled.th`

`

export const StyledTbody = styled.tbody`

`

export const StyledTD = styled.td`
	display: flex;
	text-align: center;

	&::before {
		content: attr(label);
		font-weight: bold;
		/* width: 120px;
		min-width: 120px; */

		@media ${media.minTablet} {
			display: none;
		}

        
	}

	@media ${media.minTablet} {
		display: initial;
	}
`;