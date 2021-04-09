import React from 'react'
import InputField from "../../component/Input/InputFeld"
import ButtonComponent from "../../component/Button/Button"
import "./../RecoverPassword/RecoverPassword.css"
import { Typography, Form } from "antd";
const { Title } = Typography;
function RecoverPassword() {
	return (
		<div className="main_class">
			<div className="RecoverPasswordBox">
				<Title className="login" level={3}>
					Forgot Password
                 </Title>
				<Form>
                <InputField
						type="password"
						placeholder="Please Enter New password"
						label="New Password"
					// value={password}
					// onChange={(e) => onChangeValue(e, "password")}
					/>
                    <InputField
						type="password"
						placeholder="Please Enter Conform password"
						label="Confirm Password"
					// value={password}
					// onChange={(e) => onChangeValue(e, "password")}
					/>
					<ButtonComponent
						// onClick={() => onSubmit()}
						Button="Reset Password"
						className="custom_btn"
					/>
				</Form>
			</div>
		</div>
	);
}
export default RecoverPassword;