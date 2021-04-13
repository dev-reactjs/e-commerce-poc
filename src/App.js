import React from 'react'
import Login from "./container/Login/Login"
import Signup from "./container/Signup/Signup"
import ForgotPassword from "./container/ForgotPassword/ForgotPassword"
import RecoverPassword from "./container/RecoverPassword/RecoverPasswrod"
import Dashboard from "./container/Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store"
function App() {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Switch>
						<Route path="/Login">
							<Login />
						</Route>
						<Route path="/Signup">
							<Signup />
						</Route>
						<Route path="/ForgotPassword">
							<ForgotPassword />
						</Route>
						<Route path="/RecoverPassword">
							<RecoverPassword />
						</Route>
						<Route exact path="/">
							<Dashboard />
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}
export default App;

// "Login Credential"
// Email :eve.holt@reqres.in
//Password:cityslicka

//"Signup Credential"
//eve.holt@reqres.in
//pistol