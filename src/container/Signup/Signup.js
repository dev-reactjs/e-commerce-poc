import React, { useState, useEffect } from 'react'
import InputField from "../../component/Input/InputFeld"
import ButtonComponent from "../../component/Button/Button"
import "./../Signup/Signup.css";
import { Typography, Form, Checkbox } from "antd";
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux"
import { fetchRegister } from "../../ApiCaller"
import Login from '../Login/Login';
import onSubmitValidation from "../../Utils/onSubmitValidation/onSignupValidation"
import {validateName,validateEmail,validateMobileNo,validatePassword} from "../../Utils/Validation/Validation"
function Signup(props) {
	const { Title } = Typography;
	const history = useHistory();
	const Signup = useSelector(state => state.registrationReducer)
	const dispatch = useDispatch()
	const [state, setState] = useState({
		fname: "",
		email: "",
		phoneNumber: null,
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
		if(text ===  'fname'){
			const nameError = validateName(e.target.value)
			if(!nameError.status){
				error.fname =  nameError.error
			}
		else if (nameError.status){
			 error.fname =  "" 
	  	}
  	}
		if(text ===  'email'){
			const emailError = validateEmail(e.target.value)
			if(!emailError.status){
				error.email =  emailError.error
			}
		else if (emailError.status){
			 error.email =  "" 
	  	}
  	}
		if(text ===  'phoneNumber'){
			const phoneError = validateMobileNo(e.target.value)
			if(!phoneError.status){
				error.phoneNumber =  phoneError.error
			}
		else if (phoneError.status){
			 error.phoneNumber =  "" 
	  	}
  	}	
		if(text ===  'password'){
			const password = validatePassword(e.target.value)
			if(!password.status){
				error.password =  password.error
			}
		else if (password.status){
			 error.password =  "" 
	  	}
  	}	
	}
	useEffect(() => {
		if (Signup.register.token) {
			history.push('/Login')
			alert("Registration Sucessfully")
		} else {
			alert("Registration failed")
		}
	}, [Signup.register]);
	const onSubmit = () => {
		let userData = {
			email: email,
			fname: fname,
			password: password,
			phoneNumber: phoneNumber,
		}

		const validationStatus = onSubmitValidation(userData)
		if (!validationStatus.isError) {
			dispatch(fetchRegister(userData, "post"))
			console.log("body======>", userData)
		}
   else {
		 alert(validationStatus.message)
	 }
		// <Validation data = {userData}/>
		// if (fname != '') {
		// 	if (email != '') {
		// 		if (phoneNumber != '') {
		// 			if (password != '') {
		// 				let body = {
		// 					"fname": state.fname,
		// 					"email": state.email,
		// 					"password": state.password,
		// 					"phoneNumber": state.phoneNumber
		// 				};
		// 				dispatch(fetchRegister(body, "post"))
		// 				console.log("body======>", body)

		// 			} else {
		// 				alert("please fill password filed")
		// 			}
		// 		} else {
		// 			alert("please fill phoneNumber filed ")
		// 		}
		// 	} else {
		// 		alert("please fill email filed")
		// 	}
		// } else {
		// 	alert("please fill fname filed")
		// }
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
					{
						error.phoneNumber && (
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
						<Title onClick={() => history.push("/Login")} level={5}>
							Login
            </Title>
					</div>
				</Form>
			</div>
		</div>
	);
}
//  const mapStateToProps = (state) => ({
//   Signup: state.registrationReducer.Signup,
// });
export default Signup;