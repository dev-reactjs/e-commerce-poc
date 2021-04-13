import React, { useState } from 'react'
import InputField from "../../component/Input/InputFeld"
import ButtonComponent from "../../component/Button/Button"
import "./../ForgotPassword/ForgotPassword.css"
import { validateEmail } from "../../Utils/Validation/Validation"
import onForgotSubmit from "../../Utils/onSubmitValidation/onForgotPasswordValidation"
import { Typography, Form } from "antd";
import { useHistory } from 'react-router'
const { Title } = Typography;
function ForgotPassword() {
	const history = useHistory()
	const [state, setState] = useState({
		email: "",
	});
	const [error, setError] = useState({
		email: "",
	});
	const onChangeValue = (e, text) => {
		setState({ ...state, [text]: e.target.value })
		if (text === 'email') {
			const emailError = validateEmail(e.target.value)
			if (!emailError.status) {
				error.email = emailError.error
			}
			else if (emailError.status) {
				error.email = ""
			}
		}
	}
	const onSubmit = () => {
	let userData = {
		email:email
	}
const validationStatus =	onForgotSubmit(userData)
if (!validationStatus.isError) {
	history.push('/RecoverPassword')
	}
	else {
		alert(validationStatus.message)
	}
}
	const { email } = state;
	return (
		<div className="main_class">
			<div className="forgotPasswordBox">
				<Title className="login" level={3}>
					Forgot Password
                 </Title>
				<Form>
					<InputField
						placeholder="Please Enter Registerd Email"
						label="Email"
						value={email}
						onChange={(e) => onChangeValue(e, "email")}
					/>
					{error.email && (
						<div style={{ color: "red" }}>
							<label>{error.email}</label>
						</div>)
					}
					<ButtonComponent
						onClick={() => onSubmit()}
						Button="Forgot Password"
						className="custom_btn"
					/>
				</Form>
			</div>
		</div>
	);
}
export default ForgotPassword;