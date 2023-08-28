import {
	Card,
	Image,
	CardDescriptionContainer,
	CardDescriptionHeading,
	CardDescriptionParagraph,
	CardNumber,
	StyledButtonLink,
	StyledIcon,
} from "./FeatureCard.styled";
import iconArrow from "../../../assets/Pics/icon_arrow-up.svg";

export const FeatureCard = ({ image, number, title, description }) => {
	return (
		<Card>
			<Image src={image} />
			<CardDescriptionContainer>
				<CardDescriptionHeading>
					<CardNumber>{number}</CardNumber>
					<span>{title}</span>
				</CardDescriptionHeading>
				<CardDescriptionParagraph>{description}</CardDescriptionParagraph>

				<StyledButtonLink
					$icon={iconArrow}
					href="https://dexola.com/"
					target="blanc"
				>
					<StyledIcon src={iconArrow} />
					<span>discover more</span>
				</StyledButtonLink>
			</CardDescriptionContainer>
		</Card>
	);
};
