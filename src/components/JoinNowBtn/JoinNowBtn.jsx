import { StyledJoinNowBtn, StyledIcon } from "./JoinNowBtn.styled";
import iconArrow from "../../assets/Pics/icon_arrow.svg";

export const JoinNowBtn = () => {
    return (
			<StyledJoinNowBtn href="https://dexola.com/">
				<StyledIcon src={iconArrow} />
				Join Now
			</StyledJoinNowBtn>
		);
}