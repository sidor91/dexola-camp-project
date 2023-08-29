import { StyledHero, StyledParagraph, Container } from "./Hero.styled";
import { HeroAnimatedImages } from "@/components/Hero/HeroAnimatedImages/HeroAnimatedImages";
import { Marquee } from "@/components/Hero/Marquee/Marquee";

export const Hero = () => {
	return (
		<StyledHero>
			<Container>
				<HeroAnimatedImages />
				<Marquee />
				<StyledParagraph>
					Prepare to be transported beyond the boundaries of traditional gaming
					with the StarRunner Ecosystem – the beating heart that drives the
					adrenaline-charged galactic P2E odyssey of 'StarRunner.'
				</StyledParagraph>
			</Container>
		</StyledHero>
	);
};
