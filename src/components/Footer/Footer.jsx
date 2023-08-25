import {
	StyledFooter,
	SocialContainer,
	Icon,
	Copyright,
	Designed,
	CopyrightContainer,
	DesignedContainer,
	DesignAndCopyContainer,
} from "./Footer.styled";
import { icons } from "../../assets/Pics/footerIcons";

export const Footer = () => {
	return (
		<StyledFooter>
			<SocialContainer>
				{icons.map(({ icon, link }, index) => (
					<a href={link} target="blanc" key={index}>
						<Icon src={icon} />
					</a>
				))}
			</SocialContainer>
			<DesignAndCopyContainer>
				<DesignedContainer>
					<Designed>Designed by Dexola - 2023</Designed>
				</DesignedContainer>
				<CopyrightContainer>
					<Copyright>© All rights reserved</Copyright>
				</CopyrightContainer>
			</DesignAndCopyContainer>
		</StyledFooter>
	);
};
