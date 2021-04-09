import React,{useState} from 'react'
import InputField from "../../component/Input/InputFeld"
import ButtonComponent from "../../component/Button/Button"
import "./../Login/Login.css";
import { Typography, Form } from "antd";
import { useHistory } from "react-router-dom";
function Login(props) {
  const { Title } = Typography;
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
 const onChangeValue = (e,text) => {
   setState({...state,[text]:e.target.value})
   validation()
 }
 const  validation = () => {
    let error = {};
    if (!state.email) {
      error.email = "Email is required";
    } else if (!/^[^]+@[^]+\.[a-z]{2,3}$/.test(state.email)) {
      error.email = "Invalid email";
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
    if(email != ''){
      if(password != '') {
           history.push('/Dashboard')
      }else {
        alert("Plese fill Email field")
      }
    }else {
      alert("Plese fill Password field")
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
          { error.email && (
            <div style={{color:"red"}}>
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
                <div style={{color:"red"}}>
                 <label>{error.password}</label>
                </div>)
            }
          <ButtonComponent
            onClick={() =>onSubmit()}
            Button="Login"
            className="custom_btn"
          />
          <div className="forgotPassword">
            <h4 onClick={()=> history.push('/ForgotPassword')}>Forgot Password</h4>
            <h4 onClick={()=> history.push('/Signup')}>Signup</h4>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;
