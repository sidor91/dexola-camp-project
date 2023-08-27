import { FeatureCard } from "../FeatureCard/FeatureCard"
import { CardsContainer } from "./FeaturesCardSet.styled";
import { featuresList } from "./featuresList";

export const FeaturesCardSet = () => {
    return (
			<CardsContainer>
				{featuresList.map(({ image, title, number, description }, index) => (
					<FeatureCard
						key={index}
						image={image}
						number={number}
						title={title}
						description={description}
					/>
				))}
			</CardsContainer>
		);

}