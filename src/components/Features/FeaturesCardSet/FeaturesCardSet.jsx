import FeatureCard from "@/components/Features/FeatureCard/FeatureCard";
import { CardsContainer } from "./FeaturesCardSet.styled";
import { featuresList } from "./featuresList";

function FeaturesCardSet  ()  {
    return (
			<CardsContainer>
				{featuresList.map(({ image, title, number, description }, index) => (
					<FeatureCard
						key={index}
						image={image}
						number={number}
						title={title}
						description={description}
						alt={title}
					/>
				))}
			</CardsContainer>
		);

}

export default FeaturesCardSet;