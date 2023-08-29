import {
	StyledFooter,
	Container,
	SocialContainer,
	Icon,
	Text,
	CopyrightContainer,
	DesignedContainer,
	DesignAndCopyContainer,
} from "./Footer.styled";
import { icons } from "@/assets/Pics/footerIcons";

export const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<SocialContainer>
					{icons.map(({ icon, link }, index) => (
						<a href={link} target="blanc" key={index} aria-label={`link to ${link}`}>
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
			</Container>
		</StyledFooter>
	);
};
