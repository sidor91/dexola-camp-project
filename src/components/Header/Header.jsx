import { StyledHeader } from "./Header.styled";
import Logo from "../../assets/Pics/Logo.svg";
import { JoinNowBtn } from "../JoinNowBtn/JoinNowBtn";

export const Header = () => {
	return (
		<StyledHeader>
				<img src={Logo} />
				<JoinNowBtn/>
		</StyledHeader>
	);
};
