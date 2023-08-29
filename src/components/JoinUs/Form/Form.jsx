import {
	StyledForm,
	Input,
	SubmitButton,
	InputContainer,
	IconAsterisk,
	ButtonText,
	ErrorMessage,
} from "./Form.styled";
import asterisk from "@/assets/Pics/asterisk.svg";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import { PasswordInput } from "./PasswordInput";
import * as Yup from "yup";
import { toast } from "react-toastify";

export const Form = () => {

	const onSubmit = ({ email, phoneNumber, password, confirmPassword }) => {
		toast(
			`email: ${email}, phoneNumber: ${phoneNumber}, password: ${password}, confirmPassword: ${confirmPassword}`
		);
	};

	const validationSchema = Yup.object({
		email: Yup.string()
			.email("Is not valid email")
			.required("Please complete this field"),
		phoneNumber: Yup.string()
			.min(10, "Phone number is too short")
			.required("Please complete this field"),
		password: Yup.string()
			.min(6, "Password is too short")
			.required("Please complete this field"),
		confirmPassword: Yup.string()
			.required("Please complete this field")
			.test("passwords-match", "Passwords must match", function (value) {
				return value === this.parent.password;
			}),
	});

	const initialValues = {
		email: "",
		phoneNumber: "",
		password: "",
		confirmPassword: "",
	};

	var formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	const {
		email: touchedEmail,
		phoneNumber: touchedPhoneNumber,
		password: touchedPassword,
		confirmPassword: touchedConfirmPassword,
	} = formik.touched;
	const {
		email: errorsEmail,
		phoneNumber: errorsPhoneNumber,
		password: errorsPassword,
		confirmPassword: errorsConfirmPassword,
	} = formik.errors;

	return (
		<StyledForm onSubmit={formik.handleSubmit} id="joinus">
			<InputContainer $iserror={touchedEmail && errorsEmail}>
				<IconAsterisk src={asterisk} />
				<Input
					id="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					autoComplete="off"
					placeholder="Enter email"
					aria-label="email"
				/>
				{touchedEmail && errorsEmail && (
					<ErrorMessage>{errorsEmail}</ErrorMessage>
				)}
			</InputContainer>
			<InputContainer $iserror={touchedPhoneNumber && errorsPhoneNumber}>
				<PhoneInput
					id="phoneNumber"
					name="phoneNumber"
					onChange={(value) => formik.setFieldValue("phoneNumber", value)}
					onBlur={() => formik.setFieldTouched("phoneNumber", true)}
					value={formik.values.phoneNumber}
					autoComplete="off"
					style={{ paddingLeft: 0 }}
					defaultCountry="UA"
					placeholder="+38(0__) ___ __ __"
					international={true}
					withCountryCallingCode={true}
					limitMaxLength={true}
					countryCallingCodeEditable={false}
					aria-label="phone number"
				/>
				{touchedPhoneNumber && errorsPhoneNumber && (
					<ErrorMessage>{errorsPhoneNumber}</ErrorMessage>
				)}
			</InputContainer>
			<PasswordInput
				id="password"
				name="password"
				value={formik.values.password}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				autoComplete="off"
				placeholder="Password"
				aria-label="password"
				$iserror={touchedPassword && errorsPassword}
			>
				{touchedPassword && errorsPassword && (
					<ErrorMessage>{errorsPassword}</ErrorMessage>
				)}
			</PasswordInput>
			<PasswordInput
				id="confirmPassword"
				name="confirmPassword"
				value={formik.values.confirmPassword}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				autoComplete="off"
				placeholder="Confirm Password"
				$iserror={touchedConfirmPassword && errorsConfirmPassword}
				aria-label="confirm password"
			>
				{touchedConfirmPassword && errorsConfirmPassword && (
					<ErrorMessage>{errorsConfirmPassword}</ErrorMessage>
				)}
			</PasswordInput>
			<SubmitButton type="submit" aria-label="Send it">
				<ButtonText>Send it</ButtonText>
			</SubmitButton>
		</StyledForm>
	);
};
