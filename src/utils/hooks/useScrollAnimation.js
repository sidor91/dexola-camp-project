import { useState, useEffect, useRef } from "react";

function useScrollAnimation() {
	const [animationActive, setAnimationActive] = useState(false);
	const [rippleAreaOffset, setRippleAreaOffset] = useState(null);
	const rippleAreaRef = useRef(null);

	useEffect(() => {
		const checkScroll = () => {
			if (window.scrollY > rippleAreaOffset) {
				setAnimationActive(true);
			}
		};

		if (rippleAreaRef.current) {
			setRippleAreaOffset(rippleAreaRef.current.offsetTop - window.innerHeight);
		}

		window.addEventListener("scroll", checkScroll);

		return () => {
			window.removeEventListener("scroll", checkScroll);
		};
	}, [rippleAreaOffset]);

	return { animationActive, rippleAreaRef };
}

export default useScrollAnimation;
