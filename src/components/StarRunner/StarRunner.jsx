import {
	Section,
	Container,
	MainHeading,
	Subheading,
} from "./StarRunner.styled";
import useScrollAnimation from "@/utils/hooks/useScrollAnimation";
import RippleEllipseAnimation from "./RippleEllipse/RippleEllipse";
import ArrowDownAnimation from "./ArrowDownAnimation/ArrowDownAnimation";

function StarRunnerAnimation() {
	const { animationActive, rippleAreaRef } = useScrollAnimation();

	return (
		<Section ref={rippleAreaRef}>
			{animationActive && (
				<>
					<Container>
						<Subheading>Explore Cyberpunk Space Adventures in</Subheading>
						<MainHeading> StarRunner ecosystem</MainHeading>
					</Container>
					<RippleEllipseAnimation />
					<ArrowDownAnimation />
				</>
			)}
		</Section>
	);
}

export default StarRunnerAnimation;
