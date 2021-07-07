import React, { useState } from 'react'
import InputField from "../../component/Input/InputFeld"
import ButtonComponent from "../../component/Button/Button"
import "./../RecoverPassword/RecoverPassword.css"
import { Typography, Form } from "antd";
import onRecoverPassword from "../../Utils/onSubmitValidation/onRecoverPassword"
import { validatePassword } from "../../Utils/Validation/Validation"
import { useHistory } from 'react-router';
const { Title } = Typography;
function RecoverPassword() {
	const history = useHistory()
	const [state, setState] = useState({
		password1: "",
		conformPassword: "",
	})
	const [error, setError] = useState({
		password: "",
		conformPassword: "",
	})
	const onChangeValue = (e, text) => {
		console.log("Hellllllllllo==>")
		setState({ ...state, [text]: e.target.value })
		console.log("event========>", e.target.value)
		if (text === 'password1') {
			const password1 = validatePassword(e.target.value)
			if (!password1.status) {
				error.password1 = password1.error
			}
			else if (password1.status) {
				error.password1 = ""
			}
		}
		if (text === 'conformPassword') {
			const conformPassword = validatePassword(e.target.value)
			if (!conformPassword.status) {
				error.conformPassword = conformPassword.error
			}
			else if (conformPassword.status) {
				error.conformPassword = ""
			}
		}
	}
	const onSubmit = () => {
		const { password1, conformPassword } = state;
		let userData = {
			password1: password1,
			conformPassword: conformPassword
		}
		const validationStatus = onRecoverPassword(userData)
		if (!validationStatus.isError) {
			history.push('/Login')
			console.log("body======>", userData)
		}
		else {
			alert(validationStatus.message)
		}
	}
	const { password1, conformPassword } = state;
	return (
		<div className="main_class">
			<div className="RecoverPasswordBox">
				<Title className="login" level={3}>
					Forgot Password
        </Title>
				<Form>
					<InputField
						type="password"
						placeholder="Please Enter  password"
						label="Password"
						value={password1}
						onChange={(e) => onChangeValue(e, "password1")}
					/>
					{
						error.password1 && (
							<div style={{ color: "red" }}>
								<label>{error.password1}</label>
							</div>)
					}
					<InputField
						type="password"
						placeholder="Please Enter Conform password"
						label="Confirm Password"
						value={conformPassword}
						onChange={(e) => onChangeValue(e, "conformPassword")}
					/>
					{
						error.conformPassword && (
							<div style={{ color: "red" }}>
								<label>{error.conformPassword}</label>
							</div>)
					}
					<ButtonComponent
						onClick={() => onSubmit()}
						Button="Reset Password"
						className="custom_btn"
					/>
				</Form>
			</div>
		</div>
	);
}
export default RecoverPassword;