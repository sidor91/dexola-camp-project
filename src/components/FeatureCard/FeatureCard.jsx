import {
	Card,
	Image,
	CardDescriptionContainer,
	CardDescriptionHeading,
	CardDescriptionParagraph,
	CardNumber,
} from "./FeatureCard.styled";
import { ButtonLink } from "../ButtonLink/ButtonLink";


export const FeatureCard = ({image, number, title, description, icon}) => {
    return (
			<Card>
				<Image src={image} />
				<CardDescriptionContainer>
					<CardDescriptionHeading>
						<CardNumber>{number}</CardNumber>
						<span>{title}</span>
					</CardDescriptionHeading>
					<CardDescriptionParagraph>
						{description}
					</CardDescriptionParagraph>

					<ButtonLink
						icon={icon}
						href="https://dexola.com/"
						title="discover more"
						textStyle={{ textTransform: "uppercase" }}
						buttonStyle={{
							width: "100%",
							marginTop: "auto",
							paddingTop: 12,
							paddingBottom: 12,
						}}
					/>
				</CardDescriptionContainer>
			</Card>
		);
}
