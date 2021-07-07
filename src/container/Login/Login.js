import React, { useState, useEffect } from 'react'
import InputField from "../../component/Input/InputFeld"
import ButtonComponent from "../../component/Button/Button"
import "./../Login/Login.css";
import { Typography, Form } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fetchLogin, } from '../../ApiCaller'
import {fetchLoginBegin} from '../../Redux/action'
import { validateEmail, validatePassword } from "../../Utils/Validation/Validation"
import onLoginValidation from "../../Utils/onSubmitValidation/onLoginValidation"
function Login(props) {
  const { Title } = Typography;
  const history = useHistory();
  const Login = useSelector(state => state.loginReducer);
  const dispatch = useDispatch()
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
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
    // if (text === 'password') {
    //   const password = validatePassword(e.target.value)
    //   if (!password.status) {
    //     error.password = password.error
    //   }
    //   else if (password.status) {
    //     error.password = ""
    //   }
    // }
  }
  useEffect(() => {
    if (Login.login.token) {
      localStorage.setItem("token", Login.login.token)
      history.push({
        pathname: '/',
        state:{logged:"auth",email:email}
      })
      // alert("Login Sucessfully")
    } 
    if(Login.login.error) {
       alert("Login failed")
    }
  }, [Login.login]);
  const onSubmit = () => {
    let userData = {
      email: email,
      password: password,
    }
    const validationStatus = onLoginValidation(userData)
    if (!validationStatus.isError) {
      dispatch(fetchLogin(userData, "post"))
      console.log("body======>", userData)
    }
    else {
      alert(validationStatus.message)
    }
  }
  const { email, password } = state;
  return (
    <div className="main_class">
      <div className="loginBox">
        <Title className="login" level={3}>
          Sign-In
        </Title>
        <Form className="form">
          <InputField
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
            Button="Login"
            className="custom_btn"
          />
          <div className="forgotPassword">
            <h4 onClick={() => history.push('/ForgotPassword')}>Forgot Password</h4>
            <h4 onClick={() => history.push('/Signup')}>Signup</h4>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;