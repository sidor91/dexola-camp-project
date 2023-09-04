import {
	StyledSection,
	StyledSectionHeader,
} from "./Section.styled";
import PropTypes from "prop-types";

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
}

export default Section;

Section.propTypes = {
	children: PropTypes.element,
	sectionName: PropTypes.string,
	sectionNumber: PropTypes.string,
};