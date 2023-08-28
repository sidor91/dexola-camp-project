import styled from "styled-components";
import { media } from "../../utils/mediaRules";
import { Paragraph, H3heading } from "../SharedElements.styled";

export const Container = styled.div`
	width: 100%;
	padding: 27px 24px 69px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	@media ${media.minTablet} {
		padding: 56px 0 76px;
	}

	@media ${media.minDesktop} {
        padding-top: 90px;
        padding-bottom: 125px;
        flex-direction: row;
	}
`;

export const InformationContainer = styled.div`
	@media ${media.minDesktop} {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	@media ${media.minDesktop} {
		margin-top: 20px;
		flex: 1;
	}
`;

export const Heading = styled(H3heading)`
margin-bottom: 12px;

@media ${media.minDesktop} {
    margin-bottom: 0;
}
`

export const Text = styled(Paragraph)`
`
export const ArrowIcon = styled.img`
margin-top: 31px;
width: fit-content;
`