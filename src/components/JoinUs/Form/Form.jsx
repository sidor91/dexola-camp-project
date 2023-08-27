import {
	StyledForm,
	Input,
	SubmitButton,
	InputContainer,
	IconAsterisk,
	ButtonText,
} from "./Form.styled";
import asterisk from "../../../assets/Pics/asterisk.svg";
// import { useState, } from "react";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import { PasswordInput } from "./PasswordInput";

export const Form = () => {

	const onSubmit = (values) => {
		console.log(values);
	};

	const initialValues = {
		email: "",
		phoneNumber: "",
		password: "",
		confirmPassword: "",
	};

	var formik = useFormik({
		initialValues,
		onSubmit,
	});

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
			<PasswordInput placeholder="Password" ></PasswordInput>
			<PasswordInput placeholder="Confirm Password" ></PasswordInput>
			<SubmitButton type="submit">
				<ButtonText>Send it</ButtonText>
			</SubmitButton>
		</StyledForm>
	);
};
