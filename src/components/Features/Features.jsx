import {
	Heading,
	InformationContainer,
	StyledParagraph,
	Container,
} from "./Features.styled";
import { FeaturesCardSet } from "./FeaturesCardSet/FeaturesCardSet";


export const Features = () => {
	return (
		<Container>
			<InformationContainer>
				<Heading>About StarRunner</Heading>
				<StyledParagraph>
					The StarRunner Blockchain Ecosystem isn't a mere playground; it's a
					living, evolving entity that adapts to the desires and creativity of
					its players.
				</StyledParagraph>
			</InformationContainer>
			<FeaturesCardSet />
		</Container>
	);
};
