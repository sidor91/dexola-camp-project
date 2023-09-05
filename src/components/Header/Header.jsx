import {
	StyledHeader,
	LogoIcon,
	StyledButtonLink,
	ArrowUpIcon,
	Container,
} from "./Header.styled";
import Logo from "@/assets/Pics/Logo.svg";
import iconArrow from "@/assets/Pics/icon_arrow-up.svg";

function Header() {
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
				<LogoIcon src={Logo} alt="Logo" aria-label="Logo DX" />
				<StyledButtonLink
					onClick={scrollToElement}
					aria-label="join now"
				>
					<ArrowUpIcon src={iconArrow} alt="arrow up" aria-hidden="true" />
					<span>join now</span>
				</StyledButtonLink>
			</Container>
		</StyledHeader>
	);
}

export default Header;
