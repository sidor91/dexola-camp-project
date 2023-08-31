import {
	Section,
	Container,
	MainHeading,
	Subheading,
	RippleEllipse,
} from "./StarrunnerAnimation.styled";
import { useState, useEffect, useRef } from "react";

function StarRunnerAnimation() {
	const [animationActive, setAnimationActive] = useState(false);
	const [rippleAreaOffset, setRippleAreaOffset] = useState(null);
	const rippleAreaRef = useRef(null);

	const checkScroll = () => {
		if (window.scrollY > rippleAreaOffset) {
			setAnimationActive(true);
		}
	};

	useEffect(() => {
		if (rippleAreaRef.current) {
			setRippleAreaOffset(rippleAreaRef.current.offsetTop - window.innerHeight);
		}
		window.addEventListener("scroll", checkScroll);
		return () => {
			window.removeEventListener("scroll", checkScroll);
		};
	}, []);

	return (
		<Section>
			<Container ref={rippleAreaRef} $animationActive={animationActive}>
				<Subheading>Explore Cyberpunk Space Adventures in</Subheading>
				<MainHeading> StarRunner ecosystem</MainHeading>
			</Container>
			<RippleEllipse $animationActive={animationActive}></RippleEllipse>
			<RippleEllipse $animationActive={animationActive}></RippleEllipse>
			<RippleEllipse $animationActive={animationActive}></RippleEllipse>
			<RippleEllipse $animationActive={animationActive}></RippleEllipse>
			<RippleEllipse $animationActive={animationActive}></RippleEllipse>
            <RippleEllipse $animationActive={animationActive}></RippleEllipse>
            
		</Section>
	);
}

export default StarRunnerAnimation;
