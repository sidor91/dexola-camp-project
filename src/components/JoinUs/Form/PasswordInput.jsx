import {
	Input,
	InputContainer,
	IconAsterisk,
	IconEye,
	IconEyeClosed,
	IconEyeContainer,
} from "./Form.styled";
import asterisk from "@/assets/Pics/asterisk.svg";
import { useState } from "react";
import "./phoneInput.css";
import PropTypes from "prop-types";

function PasswordInput({ children, $iserror, ...props }) {
	const [isPasswordShown, setIsPasswordShown] = useState(false);

	const togglePassword = () => {
		setIsPasswordShown(!isPasswordShown);
	};

	return (
		<InputContainer $iserror={$iserror}>
			<IconAsterisk src={asterisk} alt="asterisk" aria-hidden="true" />
			<Input
				{...props}
				type={isPasswordShown ? "text" : "password"}
			/>
			<IconEyeContainer onClick={togglePassword}>
				{isPasswordShown ? (
					<IconEye aria-label="password shown" />
				) : (
					<IconEyeClosed aria-label="password hidden" />
				)}
			</IconEyeContainer>
			{children}
		</InputContainer>
	);
}

export default PasswordInput;

PasswordInput.propTypes = {
	children: PropTypes.element,
	$iserror: PropTypes.string,
};
