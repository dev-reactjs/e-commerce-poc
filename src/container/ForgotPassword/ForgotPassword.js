import React from 'react'
import InputField from "../../component/Input/InputFeld"
import ButtonComponent from "../../component/Button/Button"
import "./../ForgotPassword/ForgotPassword.css"
import { Typography, Form } from "antd";
const { Title } = Typography;
function ForgotPassword() {
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
					// value={email}
					// onChange={(e) => onChangeValue(e, "email")}
					/>
					<ButtonComponent
						// onClick={() => onSubmit()}
						Button="Forgot Password"
						className="custom_btn"
					/>
				</Form>
			</div>
		</div>
	);
}
export default ForgotPassword;