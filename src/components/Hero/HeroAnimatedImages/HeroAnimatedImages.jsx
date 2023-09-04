import { useState, useEffect } from "react";
import {
	ImagesContainer,
	StyledImage,
	Container,
} from "./HeroAnimatedImages.styled";
import {
	heroProperty1Mobile,
	heroProperty1Desktop,
} from "@/assets/Pics/heroPics/pic1Hero/heroPic-1";
import {
	heroProperty2Mobile,
	heroProperty2Desktop,
} from "@/assets/Pics/heroPics/pic2Hero/heroPic-2";
import useWindowDimensions from "@/utils/hooks/useWindowDimensions";
// import imagePreLoad from "@/utils/imagePreLoad";

function HeroAnimatedImages() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [images1, setImages1] = useState(null);
	const [images2, setImages2] = useState(null);
	// const [wereImagesLoaded, setWereImagesLoaded] = useState(false)
	const dimensions = useWindowDimensions();


	useEffect(() => {
		// (async () => {
			if (dimensions >= 744) {
				// await
				// imagePreLoad([...heroProperty1Desktop, ...heroProperty2Desktop]);
			setImages1(heroProperty1Desktop);
			setImages2(heroProperty2Desktop);
			// setWereImagesLoaded(true);
		} else {
				// await
				// imagePreLoad([...heroProperty1Mobile, ...heroProperty2Mobile]);
			setImages1(heroProperty1Mobile);
			setImages2(heroProperty2Mobile);
			// setWereImagesLoaded(true);
			}
		// })()
	}, [dimensions]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (images1 && currentIndex === images1.length - 1) {
				setCurrentIndex(0);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [currentIndex, images1]);

	return (
		<ImagesContainer>
			<Container>
				{images1 &&
					// wereImagesLoaded &&
					images1.map(({ lowRes, highRes }, index) => (
						<StyledImage
							key={index}
							src={lowRes}
							srcSet={`${lowRes} 1x, ${highRes} 2x`}
							alt={`Image ${index + 1}`}
							style={{
								opacity: index === currentIndex ? 1 : 0,
								transition: "opacity 2s ease-in-out",
							}}
							aria-hidden="true"
						/>
					))}
			</Container>
			<Container>
				{images2 &&
					// wereImagesLoaded &&
					images2.map(({ lowRes, highRes }, index) => (
						<StyledImage
							key={index}
							src={lowRes}
							srcSet={`${lowRes} 1x, ${highRes} 2x`}
							alt={`Image ${index + 1}`}
							style={{
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
