import {
	Input,
	InputContainer,
	IconAsterisk,
	IconEye,
	IconEyeClosed,
	IconEyeContainer,
} from "./Form.styled";
import asterisk from "../../../assets/Pics/asterisk.svg";
import { useState, useRef } from "react";
import "./phoneInput.css";

export const PasswordInput = (props) => {
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
		<InputContainer>
			<IconAsterisk src={asterisk} />
			<Input {...props} type="password" ref={passwordref} />
			<IconEyeContainer onClick={togglePassword}>
				{isPasswordShown ? <IconEye /> : <IconEyeClosed />}
			</IconEyeContainer>
			{props.children}
		</InputContainer>
	);
};
