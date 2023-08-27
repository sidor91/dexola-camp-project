import {
	StyledForm,
	Input,
	SubmitButton,
	InputContainer,
	IconAsterisk,
	IconEye,
	IconEyeClosed,
	IconEyeContainer,
	ButtonText,
} from "./Form.styled";
import asterisk from "../../../assets/Pics/asterisk.svg";
import { useState, useRef } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";


export const Form = () => {
	const [isPasswordShown, setIsPasswordShown] = useState(false);
	const [isConfirmationPasswordShown, setIsConfirmationPasswordShown] =
		useState(false);
	const passwordref = useRef(null);
    const confirmPasswordRef = useRef(null);

	const togglePassword = () => {
		setIsPasswordShown(!isPasswordShown);
		if (isPasswordShown) {
			passwordref.current.type = "password";
		} else {
			passwordref.current.type = "text";
		}
	};

	const toggleConfirmationPassword = () => {
		setIsConfirmationPasswordShown(!isConfirmationPasswordShown);
		if (isConfirmationPasswordShown) {
			confirmPasswordRef.current.type = "password";
		} else {
			confirmPasswordRef.current.type = "text";
		}
    };

    const onSubmit = (values) => {
			console.log(values);
		};
    
    const initialValues = {
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    }

    var formik = useFormik({
        initialValues, 
        onSubmit,
    })

    

	return (
		<StyledForm onSubmit={formik.handleSubmit}>
			<InputContainer>
				<IconAsterisk src={asterisk} />
				<Input placeholder="Enter email" />
			</InputContainer>
			<InputContainer>
				<PhoneInput
					onChange={(value) => formik.setFieldValue("phoneNumber", value)}
					onBlur={() => formik.setFieldTouched("phoneNumber", true)}
					value={formik.values.phoneNumber}
					id="phoneNumber"
					name="phoneNumber"
					style={{ paddingLeft: 0 }}
					defaultCountry="UA"
					placeholder="+38(0__) ___ __ __"
					international={true}
					withCountryCallingCode={true}
				/>
			</InputContainer>
			<InputContainer>
				<IconAsterisk src={asterisk} />
				<Input placeholder="Password" type="password" ref={passwordref} />
				<IconEyeContainer onClick={togglePassword}>
					{isPasswordShown ? <IconEye /> : <IconEyeClosed />}
				</IconEyeContainer>
			</InputContainer>
			<InputContainer>
				<IconAsterisk src={asterisk} />
				<Input
					placeholder="Confirm Password"
					type="password"
					ref={confirmPasswordRef}
				/>
				<IconEyeContainer onClick={toggleConfirmationPassword}>
					{isConfirmationPasswordShown ? <IconEye /> : <IconEyeClosed />}
				</IconEyeContainer>
			</InputContainer>
			<SubmitButton type="submit">
				<ButtonText>Send it</ButtonText>
			</SubmitButton>
		</StyledForm>
	);
};
