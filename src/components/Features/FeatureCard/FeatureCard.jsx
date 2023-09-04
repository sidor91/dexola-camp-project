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
import PropTypes from "prop-types";

function FeatureCard ({ image, number, title, description }) {
	return (
		<Card>
			<ImageContainer>
				<Image
					src={image.lowRes}
					srcSet={`${image.lowRes} 1x, ${image.highRes} 2x`}
					alt={title}
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
}

export default FeatureCard;

FeatureCard.propTypes = {
	image: PropTypes.shape({
		lowRes: PropTypes.string.isRequired,
		highRes: PropTypes.string.isRequired,
	}),
	number: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};