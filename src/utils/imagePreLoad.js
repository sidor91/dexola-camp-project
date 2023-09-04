async function imagePreLoad(images) {
const { devicePixelRatio } = window;

		const loadImage = async (src) => {
			try {
				const img = new Image();
				img.src = src;
				await img.decode();
			} catch (error) {
				console.error("Image load error:", error);
			}
		};

	for (const { lowRes, highRes } of images) {
			if (devicePixelRatio === 1) {
				await loadImage(lowRes);
				return;
			} else {
				await loadImage(highRes);
			}
		}
}

export default imagePreLoad;
