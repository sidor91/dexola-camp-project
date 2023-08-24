import { useState, useEffect } from "react";
import {
	ImagesContainer,
	StyledImage,
	Container,
} from "./HeroAnimatedImages.styled";
import images1 from "../../assets/Pics/heroPics/pic1Hero/heroPic-1";
import images2 from "../../assets/Pics/heroPics/pic2Hero/heroPic-2";

export const HeroAnimatedImages = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (currentIndex === images1?.length - 1) {
				setCurrentIndex(0);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [currentIndex]);

	return (
		<ImagesContainer>
			<Container>
				{images1.map((image, index) => (
					<StyledImage
						key={index}
						src={image}
						alt={`Image ${index + 1}`}
						style={{
							opacity: index === currentIndex ? 1 : 0,
							transition: "opacity 2s ease-in-out",
						}}
					/>
				))}
			</Container>
			<Container>
				{images2.map((image, index) => (
					<StyledImage
						key={index}
						src={image}
						alt={`Image ${index + 1}`}
						style={{
							opacity: index === currentIndex ? 1 : 0,
							transition: "opacity 2s ease-in-out",
						}}
					/>
				))}
			</Container>
		</ImagesContainer>
	);
};

