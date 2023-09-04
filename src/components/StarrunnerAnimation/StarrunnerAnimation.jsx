import {
	Section,
	Container,
	MainHeading,
	Subheading,
	RippleEllipse,
	ArrowDownAnimationContainer,
	ArrowDiv1,
	ArrowDiv2,
	ArrowDiv3,
} from "@/components/StarRunnerAnimation/StarRunnerAnimation.styled";
import { useState, useEffect, useRef } from "react";

function StarRunnerAnimation() {
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

	return (
		<Section ref={rippleAreaRef}>
			{animationActive && (
				<>
					<Container>
						<Subheading>Explore Cyberpunk Space Adventures in</Subheading>
						<MainHeading> StarRunner ecosystem</MainHeading>
					</Container>
					<RippleEllipse></RippleEllipse>
					<RippleEllipse></RippleEllipse>
					<RippleEllipse></RippleEllipse>
					<RippleEllipse></RippleEllipse>
					<RippleEllipse></RippleEllipse>
					<RippleEllipse></RippleEllipse>
					<ArrowDownAnimationContainer>
						<ArrowDiv1></ArrowDiv1>
						<ArrowDiv2></ArrowDiv2>
						<ArrowDiv3></ArrowDiv3>
					</ArrowDownAnimationContainer>
				</>
			)}
		</Section>
	);
}

export default StarRunnerAnimation;
