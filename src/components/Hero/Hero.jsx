import {
	StyledHero,
	StyledParagraph,
} from "./Hero.styled";
import { HeroAnimatedImages } from "./HeroAnimatedImages/HeroAnimatedImages";
import { Marquee } from "./Marquee/Marquee";

export const Hero = () => {
	return (
		<StyledHero>
			<HeroAnimatedImages />
			<Marquee/>
				<StyledParagraph>
					Prepare to be transported beyond the boundaries of traditional gaming
					with the StarRunner Ecosystem – the beating heart that drives the
					adrenaline-charged galactic P2E odyssey of 'StarRunner.'
				</StyledParagraph>
		</StyledHero>
	);
};
