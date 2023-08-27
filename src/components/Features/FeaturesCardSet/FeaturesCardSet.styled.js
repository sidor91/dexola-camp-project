import styled from "styled-components";
import { media } from "../../../utils/mediaRules";

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
