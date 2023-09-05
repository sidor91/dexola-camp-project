const scrollToElement = (title) => {
	const element = document.getElementById(title);
	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
		});
	}
};

export default scrollToElement;
