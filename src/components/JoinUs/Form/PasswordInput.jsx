import {
	Input,
	InputContainer,
	IconAsterisk,
	IconEye,
	IconEyeClosed,
	IconEyeContainer,
} from "./Form.styled";
import asterisk from "@/assets/Pics/asterisk.svg";
import { useState, useRef } from "react";
import "./phoneInput.css";
import PropTypes from "prop-types";

function PasswordInput ({children, $iserror, ...props}) {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const passwordref = useRef(null);

	const togglePassword = () => {
		setIsPasswordShown(!isPasswordShown);
		if (isPasswordShown) {
			passwordref.current.type = "password";
		} else {
			passwordref.current.type = "text";
		}
	};

	return (
		<InputContainer $iserror={$iserror}>
			<IconAsterisk src={asterisk} alt="asterisk" aria-hidden="true" />
			<Input {...props} type="password" ref={passwordref} />
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
	$iserror: PropTypes.bool,
};