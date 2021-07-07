import React from 'react'
import Login from "./container/Login/Login"
import Signup from "./container/Signup/Signup"
import ForgotPassword from "./container/ForgotPassword/ForgotPassword"
import RecoverPassword from "./container/RecoverPassword/RecoverPasswrod"
import Dashboard from "./container/Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store"
import PrivateRoute from "./container/Routes/PrivateRoute";
import PublicRoute from "./container/Routes/PublicRoutes"
function App() {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Switch> 	
					<PrivateRoute exact path="/" component={Dashboard} >
				  <Dashboard/>
					</PrivateRoute>
						<Route path="/Login">
							<Login />
						</Route>
						<PublicRoute  restricted={true} path="/Signup"  component={Signup} exact>
							<Signup/>
						</PublicRoute>
						<PublicRoute  restricted={false} path="/ForgotPassword">
							<ForgotPassword />
						</PublicRoute>
						<PublicRoute   restricted={false} path="/RecoverPassword">
							<RecoverPassword />
						</PublicRoute>
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