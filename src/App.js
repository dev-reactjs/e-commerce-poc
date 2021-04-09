import React from 'react'
import Login from "./container/Login/Login"
import Signup from "./container/Signup/Signup"
import ForgotPassword from "./container/ForgotPassword/ForgotPassword"
import RecoverPassword from "./container/RecoverPassword/RecoverPasswrod"
import AddToCart from "./container/AddToCart/AddToCart"
import Dashboard from "./container/Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    //  <AddToCart />
    // <Dashboard/>
    //  <Login /> 
    //  <Signup/>
    // <ForgotPassword />
    // <RecoverPassword />
    <Router>
      <div>
        <Switch>
        <Route exact path="/">
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
          <Route path="/Dashboard">
          <Dashboard />
          </Route>
           <Route path="/AddToCart">
          <AddToCart />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}
export default App;
