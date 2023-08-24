import { StyledHeader, StyledButtonLink, StyledIcon } from "./Header.styled";
import Logo from "../../assets/Pics/Logo.svg";
import iconArrow from "../../assets/Pics/icon_arrow.svg";

export const Header = () => {
	return (
		<StyledHeader>
			<img src={Logo} />
			<StyledButtonLink href="https://dexola.com/">
				<StyledIcon src={iconArrow} />
				<span style={{ textTransform: "capitalize" }}>join now</span>
			</StyledButtonLink>
		</StyledHeader>
	);
};
