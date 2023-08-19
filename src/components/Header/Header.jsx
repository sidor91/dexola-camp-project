import { StyledHeader, HeaderContainer } from "./Header.styled";
import Logo from "../../assets/Pics/Logo.svg";
import { JoinNowBtn } from "../JoinNowBtn/JoinNowBtn";

export const Header = ({ children }) => {
	return (
		<StyledHeader>
			<HeaderContainer>
				<img src={Logo} />
				<JoinNowBtn/>
			</HeaderContainer>
		</StyledHeader>
	);
};
