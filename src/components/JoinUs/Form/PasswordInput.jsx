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
			<IconAsterisk src={asterisk} />
			<Input {...props} type="password" ref={passwordref} />
			<IconEyeContainer onClick={togglePassword} aria-label="show/hide password">
				{isPasswordShown ? <IconEye /> : <IconEyeClosed />}
			</IconEyeContainer>
			{children}
		</InputContainer>
	);
};

export default PasswordInput;