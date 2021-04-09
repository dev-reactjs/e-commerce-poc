import React, { useState } from 'react'
import InputField from "../../component/Input/InputFeld"
import ButtonComponent from "../../component/Button/Button"
import "./../Signup/Signup.css";
import { Typography, Form, Checkbox } from "antd";
import { useHistory } from "react-router-dom"
function Signup(props) {
	const { Title } = Typography;
	const history = useHistory();
	const [state, setState] = useState({
		fname: "",
		email: "",
		phoneNumber: "",
		password: "",
	});
	const [error, setError] = useState({
		fname: "",
		email: "",
		phoneNumber: "",
		password: "",
	});
	const onChangeValue = (e, text) => {
		setState({ ...state, [text]: e.target.value })
		validation()
	}
	const validation = () => {
		let error = {};
		if (!state.fname) {
			error.fname = "Name is required";
		} else if (/!^[\\p{L}]+$/.test(state.fname)) {
			error.fname = "Invalid name";
		}
		if (!state.email) {
			error.email = "Email is required";
		} else if (!/^[^]+@[^]+\.[a-z]{2,3}$/.test(state.email)) {
			error.email = "Invalid email";
		}
		if (!state.phoneNumber) {
			error.phoneNumber = "phoneNumber is required";
		} else if (!/(^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9})$/.test(state.phoneNumber)) {
			error.phoneNumber = "Invalid phoneNumber";
		}
		if (!state.password) {
			error.password = "Password is required";
		} else if (
			!/((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,12})/.test(state.password)
		) {
			error.password = "Invalid password";
		}
		setError(error);
	};
	const onSubmit = () => {
		if (fname != '') {
			if (email != '') {
				if (phoneNumber != '') {
					if (password != '') {
						history.push('/')
					} else {
						alert("please fill password filed")
					}
				} else {
					alert("please fill phoneNumber filed ")
				}
			} else {
				alert("please fill email filed")
			}
		} else{
			alert("please fill fname filed")
		}
	}
	const { email, password, fname, phoneNumber } = state;
	return (
		<div className="main_class">
			<div className="signUpBox">
				<Title className="login" level={3}>
					Sign-Up
         </Title>
				<Form className="signUpform">
					<InputField
						placeholder="Please Enter your Name"
						label="Full Name"
						value={fname}
						onChange={(e) => onChangeValue(e, "fname")}
					/>
					{error.fname && (
						<div style={{ color: "red" }}>
							<label>{error.fname}</label>
						</div>)
					}
					<InputField
						type="Email"
						placeholder="Please Enter your Email"
						label="Email"
						value={email}
						onChange={(e) => onChangeValue(e, "email")}
					/>
					{error.email && (
						<div style={{ color: "red" }}>
							<label>{error.email}</label>
						</div>)
					}
					<InputField
						placeholder="Please Enter your Phone number"
						label="Phone Number"
						value={phoneNumber}
						onChange={(e) => onChangeValue(e, "phoneNumber")}
					/>
					{error.phoneNumber && (
						<div style={{ color: "red" }}>
							<label>{error.phoneNumber}</label>
						</div>)
					}
					<InputField
						type="password"
						placeholder="Please Enter your password"
						label="Password"
						value={password}
						onChange={(e) => onChangeValue(e, "password")}
					/>
					{
						error.password && (
							<div style={{ color: "red" }}>
								<label>{error.password}</label>
							</div>)
					}
					<ButtonComponent
						onClick={() => onSubmit()}
						Button="SignUp"
						className="custom_btn"
					/>
					<div className="loginLink">
						<Title onClick={() => history.push("/")} level={5}>
							Login
            </Title>
					</div>
				</Form>
			</div>
		</div>
	);
}
export default Signup;