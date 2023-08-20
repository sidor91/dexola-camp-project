import { StyledButtonLink, StyledIcon } from "./ButtonLink.styled";


export const ButtonLink = ({ href, textStyle, title, icon, buttonStyle, iconStyle }) => {
	return (
		<StyledButtonLink href={href} style={buttonStyle}>
			{icon && <StyledIcon src={icon} style={iconStyle} />}
			<span style={textStyle}>{title}</span>
		</StyledButtonLink>
	);
};
