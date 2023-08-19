import {
	StyledHero,
	ImagesContainer,
	StyledImage,
	StyledMarquee,
	MarqueeText,
	StyledParagraph,
} from "./Hero.styled";
import { heroProperty1 } from "../../assets/Pics/hero pics/pic 1 hero/heroPic-1";
import { heroProperty2 } from "../../assets/Pics/hero pics/pic 2 hero/heroPic-2";



export const Hero = () => {
    return (
			<StyledHero>
				<ImagesContainer>
					<StyledImage src={heroProperty1.default} />
					<StyledImage src={heroProperty2.default} />
				</ImagesContainer>
				<StyledMarquee speed={150}>
					<MarqueeText>dexola camp</MarqueeText>
				</StyledMarquee>
				<StyledParagraph>
					Prepare to be transported beyond the boundaries of traditional gaming
					with the StarRunner Ecosystem – the beating heart that drives the
					adrenaline-charged galactic P2E odyssey of 'StarRunner.'
				</StyledParagraph>
			</StyledHero>
		);
}