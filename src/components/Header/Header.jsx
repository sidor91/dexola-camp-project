import { StyledHeader, HeaderContainer } from "./Header.styled";

export const Header = ({ children }) => {
	return (
		<StyledHeader>
			<HeaderContainer>{children}</HeaderContainer>
		</StyledHeader>
	);
};
