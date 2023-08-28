import { StyledHeader, StyledButtonLink, StyledIcon } from "./Header.styled";
import Logo from "../../assets/Pics/Logo.svg";
import iconArrow from "../../assets/Pics/icon_arrow-up.svg";

export const Header = () => {
	return (
		<StyledHeader>
			<img src={Logo} />
			<StyledButtonLink href="https://dexola.com/" target="blanc">
				<StyledIcon src={iconArrow} />
				<span>join now</span>
			</StyledButtonLink>
		</StyledHeader>
	);
};
