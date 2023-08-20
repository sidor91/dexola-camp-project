import { StyledHeader } from "./Header.styled";
import Logo from "../../assets/Pics/Logo.svg";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import iconArrow from "../../assets/Pics/icon_arrow.svg";

export const Header = () => {
	return (
		<StyledHeader>
			<img src={Logo} />
			<ButtonLink
				href="https://dexola.com/"
				title="join now"
				textStyle={{textTransform: "capitalize"}}
				icon={iconArrow}
			/>
		</StyledHeader>
	);
};
