import {
	// Container,
	Heading,
	InformationContainer,
	Paragraph,
	CardsContainer,
	Card,
	Image,
	CardDescriptionContainer,
	CardDescriptionHeading,
	CardDescriptionParagraph,
	CardNumber,
} from "./Features.styled";
import images from "../../assets/Pics/features pics/featurePics";
import iconArrow from "../../assets/Pics/icon_arrow.svg";
import { ButtonLink } from "../ButtonLink/ButtonLink";

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
				<Card>
					<Image src={images[0]} />
					<CardDescriptionContainer>
						<CardDescriptionHeading>
							<CardNumber>01</CardNumber>
							<span>STRU Token sale</span>
						</CardDescriptionHeading>
						<CardDescriptionParagraph>
							The StarRunner Token the exclusive crypto currency fueling the
							adventure of the Play-to-Earn sensation.
						</CardDescriptionParagraph>

						<ButtonLink
							icon={iconArrow}
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
				<Card>
					<Image src={images[1]} />
					<CardDescriptionContainer>
						<CardDescriptionHeading>
							<CardNumber>02</CardNumber>
							<span>Staking</span>
						</CardDescriptionHeading>
						<CardDescriptionParagraph>
							Join a community of stakers, united by their passion for
							exploration, strategy, and gaming.
						</CardDescriptionParagraph>

						<ButtonLink
							icon={iconArrow}
							href="https://dexola.com/"
							title="discover more"
							textStyle={{ textTransform: "uppercase" }}
							buttonStyle={{ width: "100%", marginTop: "auto" }}
						/>
					</CardDescriptionContainer>
				</Card>
				<Card>
					<Image src={images[2]} />
					<CardDescriptionContainer>
						<CardDescriptionHeading>
							<CardNumber>03</CardNumber>
							<span>NFT minting</span>
						</CardDescriptionHeading>
						<CardDescriptionParagraph>
							Every StarRunner NFT tells a story – YOUR story. This NFT
							encapsulates the essence of your journey.
						</CardDescriptionParagraph>

						<ButtonLink
							icon={iconArrow}
							href="https://dexola.com/"
							title="discover more"
							textStyle={{ textTransform: "uppercase" }}
							buttonStyle={{ width: "100%", marginTop: "auto" }}
						/>
					</CardDescriptionContainer>
				</Card>
			</CardsContainer>
		</>
	);
};
