import {
	Card,
	ImageContainer,
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
			<ImageContainer>
				<Image
					src={image.lowRes}
					srcSet={`${image.lowRes} 1x, ${image.highRes} 2x`}
					alt={alt}
					aria-hidden="true"
					loading="lazy"
				/>
			</ImageContainer>
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