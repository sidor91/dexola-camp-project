import { StyledHero, ImagesContainer, StyledImage } from "./Hero.styled";
import { heroProperty1 } from "../../assets/Pics/hero pics/pic 1 hero/heroPic-1";
import { heroProperty2 } from "../../assets/Pics/hero pics/pic 2 hero/heroPic-2";

export const Hero = () => {
    return (
			<StyledHero>
				<ImagesContainer>
					<StyledImage src={heroProperty1.default} />
					<StyledImage src={heroProperty2.default} />
				</ImagesContainer>
			</StyledHero>
		);
}