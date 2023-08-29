import { useState, useEffect } from "react";
import {
	ImagesContainer,
	StyledImage,
	Container,
} from "./HeroAnimatedImages.styled";
import images1 from "@/assets/Pics/heroPics/pic1Hero/heroPic-1";
import images2 from "@/assets/Pics/heroPics/pic2Hero/heroPic-2";

function HeroAnimatedImages() {
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

	const defineDisplay = (index, currentIndex) => {
		if (
			index === currentIndex ||
			index === currentIndex + 1 ||
			index === currentIndex - 1
		) {
			return "block";
		} else if (index === 4 && currentIndex === 0) {
			return "block";
		} else if (index === 0 && currentIndex === 4) {
			return "block ";
		} else {
			return "none";
		}
	};

	return (
		<ImagesContainer>
			<Container>
				{images1.map((image, index) => (
					<StyledImage
						key={index}
						src={image}
						alt={`Image ${index + 1}`}
						style={{
							display: `${defineDisplay(index, currentIndex)}`,
							opacity: index === currentIndex ? 1 : 0,
							transition: "opacity 2s ease-in-out",
						}}
						aria-hidden="true"
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
							display: `${defineDisplay(index, currentIndex)}`,
							opacity: index === currentIndex ? 1 : 0,
							transition: "opacity 2s ease-in-out",
						}}
						aria-hidden="true"
					/>
				))}
			</Container>
		</ImagesContainer>
	);
}

export default HeroAnimatedImages;
