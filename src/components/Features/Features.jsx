import {
	Heading,
	InformationContainer,
	Paragraph,
	CardsContainer,
} from "./Features.styled";
import images from "../../assets/Pics/features pics/featurePics";
import iconArrow from "../../assets/Pics/icon_arrow.svg";
import { FeatureCard } from "../FeatureCard/FeatureCard";

export const Features = () => {
	return (
		<>
			<InformationContainer>
				<Heading>About StarRunner</Heading>
				<Paragraph>
					The StarRunner Blockchain Ecosystem isn't a mere playground; it's a
					living, evolving entity that adapts to the desires and creativity of
					its players.
				</Paragraph>
			</InformationContainer>
			<CardsContainer>
				<FeatureCard
					image={images[0]}
					number="01"
					title="STRU Token sale"
					description="The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation."
					icon={iconArrow}
				/>
				<FeatureCard
					image={images[1]}
					number="02"
					title="Staking"
					description="Join a community of stakers, united by their passion for exploration, strategy, and gaming."
					icon={iconArrow}
				/>
				<FeatureCard
					image={images[2]}
					number="03"
					title="NFT minting"
					description="Every StarRunner NFT tells a story – YOUR story. This NFT encapsulates the essence of your journey."
					icon={iconArrow}
				/>
			</CardsContainer>
		</>
	);
};
