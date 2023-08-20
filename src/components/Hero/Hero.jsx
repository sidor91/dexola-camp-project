import { useState, useEffect } from "react";
import {
	StyledHero,
	ImagesContainer,
	StyledImage,
	StyledMarquee,
	MarqueeText,
	StyledParagraph,
} from "./Hero.styled";
import {
	heroProperty1,
	heroProperty1_2x,
} from "../../assets/Pics/hero pics/pic 1 hero/heroPic-1";
import {
	heroProperty2,
	heroProperty2_2x,
} from "../../assets/Pics/hero pics/pic 2 hero/heroPic-2";

export const Hero = () => {
	const [currentImage_1Index, setCurrentImage_1Index] = useState(0);
	const [currentImage_2Index, setCurrentImage_2Index] = useState(0);
	const [property1Images, setProperty1Images] = useState([]);
	const [property2Images, setProperty2Images] = useState([]);

	useEffect(() => {
		const { devicePixelRatio } = window;
		if (devicePixelRatio === 2) {
			setProperty1Images(heroProperty1_2x);
			setProperty2Images(heroProperty2_2x);
		} else {
			setProperty1Images(heroProperty1);
			setProperty2Images(heroProperty2);
		}
	}, [devicePixelRatio]);

	useEffect(() => {
		if (property1Images && property2Images) {
			const interval = setInterval(() => {
				if (currentImage_1Index === property1Images.length - 1) {
					setCurrentImage_1Index(0);
				} else {
					setCurrentImage_1Index(currentImage_1Index + 1);
				}

				if (currentImage_2Index === property2Images.length - 1) {
					setCurrentImage_2Index(0);
				} else {
					setCurrentImage_2Index(currentImage_2Index + 1);
				}
			}, 3000);

			return () => {
				clearInterval(interval);
			};
		}
	}, [currentImage_1Index]);

	return (
		<StyledHero>
			<ImagesContainer>
				<StyledImage
					style={
						property1Images && {
							backgroundImage: `url("${property1Images[currentImage_1Index]}")`,
						}
					}
				/>
				<StyledImage
					style={
						property2Images && {
							backgroundImage: `url("${property2Images[currentImage_1Index]}")`,
						}
					}
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
