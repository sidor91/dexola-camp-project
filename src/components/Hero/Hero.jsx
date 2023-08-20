import { useState, useEffect } from "react";
import {
	StyledHero,
	ImagesContainer,
	StyledImage,
	StyledMarquee,
	MarqueeText,
	StyledParagraph,
} from "./Hero.styled";
import images_1 from "../../assets/Pics/hero pics/pic 1 hero/heroPic-1";
import images_2 from "../../assets/Pics/hero pics/pic 2 hero/heroPic-2";

export const Hero = () => {
	const [currentImage_1Index, setCurrentImage_1Index] = useState(0);
	const [currentImage_2Index, setCurrentImage_2Index] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (
				currentImage_1Index === images_1.length - 1 &&
				currentImage_2Index === images_2.length - 1
			) {
				setCurrentImage_1Index(0);
				setCurrentImage_2Index(0);
			} else {
				setCurrentImage_1Index(currentImage_1Index + 1);
				setCurrentImage_2Index(currentImage_2Index + 1);
			}
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [currentImage_1Index, currentImage_2Index]);

	return (
		<StyledHero>
			<ImagesContainer>
				<StyledImage
					style={{
						backgroundImage: `url("${images_1[currentImage_1Index]}")`,
					}}
				/>
				<StyledImage
					style={{
						backgroundImage: `url("${images_2[currentImage_1Index]}")`,
					}}
				/>
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
};
