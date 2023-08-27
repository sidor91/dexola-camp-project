import {
	StyledFooter,
	SocialContainer,
	Icon,
	Text,
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
					<Text>Designed by Dexola - 2023</Text>
				</DesignedContainer>
				<CopyrightContainer>
					<Text>© All rights reserved</Text>
				</CopyrightContainer>
			</DesignAndCopyContainer>
		</StyledFooter>
	);
};