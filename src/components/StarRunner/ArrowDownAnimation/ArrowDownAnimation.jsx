import {
	ArrowDownAnimationContainer,
	ArrowDiv1,
	ArrowDiv2,
	ArrowDiv3,
} from "./ArrowDownAnimation.styled";
import scrollToElement from "@/utils/smoothScroll";

function ArrowDownAnimation() {
    return (
			<ArrowDownAnimationContainer
				onClick={() => {
					scrollToElement("features");
				}}
			>
				<ArrowDiv1></ArrowDiv1>
				<ArrowDiv2></ArrowDiv2>
				<ArrowDiv3></ArrowDiv3>
			</ArrowDownAnimationContainer>
		);
}

export default ArrowDownAnimation;