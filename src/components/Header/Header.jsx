import {
	StyledHeader,
	LogoIcon,
	StyledButtonLink,
	ArrowUpIcon,
	Container,
} from "./Header.styled";
import Logo from "../../assets/Pics/Logo.svg";
import iconArrow from "../../assets/Pics/icon_arrow-up.svg";

export const Header = () => {

	const scrollToElement = () => {
		const element = document.getElementById("joinus");
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	};
	
	return (
		<StyledHeader>
			<Container>
				<LogoIcon src={Logo} />
				<StyledButtonLink onClick={scrollToElement}>
					<ArrowUpIcon src={iconArrow} />
					<span>join now</span>
				</StyledButtonLink>
			</Container>
		</StyledHeader>
	);
};
