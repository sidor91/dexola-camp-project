import {
	StyledSection,
	StyledSectionHeader,
	Container,
} from "./Section.styled";

export const Section = ({ children, sectionName, sectionNumber }) => {
	return (
		<StyledSection>
			<StyledSectionHeader>
				<span>{sectionName}</span>
				<span>{sectionNumber}</span>
			</StyledSectionHeader>
			<Container>{children}</Container>
		</StyledSection>
	);
};
