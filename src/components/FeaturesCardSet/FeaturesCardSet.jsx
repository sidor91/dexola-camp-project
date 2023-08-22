import { FeatureCard } from "../FeatureCard/FeatureCard"
import iconArrow from "../../assets/Pics/icon_arrow.svg";
import { CardsContainer } from "./FeaturesCardSet.styled";
import { featuresList } from "./featuresList";

export const FeaturesCardSet = () => {
    return (
			<CardsContainer>
				{featuresList.map(({ image, title, number, description }) => (
					<FeatureCard
						image={image}
						number={number}
						title={title}
						description={description}
						icon={iconArrow}
					/>
				))}
			</CardsContainer>
		);

}