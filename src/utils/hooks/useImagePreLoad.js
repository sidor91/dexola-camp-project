import { useState, useEffect } from "react";

function useImagePreLoad (images) {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const loadImage = async (src) => {
			try {
				const img = new Image();
				img.src = src;
				await img.decode();
			} catch (error) {
				console.error("Image load error:", error);
			}
		};

		const loadImages = async (imagesToLoad) => {
			for (const imageSrc of imagesToLoad) {
				await loadImage(imageSrc);
			}
			setIsLoaded(true);
		};

		loadImages(images);
    }, []);
    
	return isLoaded;
};

export default useImagePreLoad;