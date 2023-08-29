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
import iconArrow from "@/assets/Pics/icon_arrow-up.svg";

function FeatureCard ({ image, number, title, description, alt }) {
	return (
		<Card>
			<Image src={image} alt={alt} aria-hidden="true" />
			<CardDescriptionContainer>
				<CardDescriptionHeading>
					<CardNumber>{number}</CardNumber>
					<span>{title}</span>
				</CardDescriptionHeading>
				<CardDescriptionParagraph>{description}</CardDescriptionParagraph>

				<StyledButtonLink
					href="https://dexola.com/"
					target="blanc"
					aria-label="discover more"
				>
					<StyledIcon src={iconArrow} alt="arrowArrow" aria-hidden="true" />
					<span>discover more</span>
				</StyledButtonLink>
			</CardDescriptionContainer>
		</Card>
	);
};

export default FeatureCard;