import { useState, useEffect } from "react";
import { ImagesContainer, StyledImage } from "./HeroAnimatedImages.styled";
import images_1 from "../../assets/Pics/hero pics/pic 1 hero/heroPic-1";
import images_2 from "../../assets/Pics/hero pics/pic 2 hero/heroPic-2";

export const HeroAnimatedImages = () => {
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
	);
};
