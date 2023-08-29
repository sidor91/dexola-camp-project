import {
	StyledSection,
	StyledSectionHeader,
} from "./Section.styled";

function Section ({ children, sectionName, sectionNumber}) {
	return (
		<StyledSection>
			<StyledSectionHeader>
				<span>{sectionName}</span>
				<span>{sectionNumber}</span>
			</StyledSectionHeader>
				{children}
		</StyledSection>
	);
};

export default Section;