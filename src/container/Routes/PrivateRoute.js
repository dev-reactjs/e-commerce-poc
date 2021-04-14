import React from 'react'
import {Route,Redirect, useLocation} from "react-router-dom"
const PrivateRoute = ({ children, ...rest}) => {
  const isAuth = true;
	return (
    <Route {...rest} render={({location}) =>isAuth?(children):(<Redirect to={{
      pathname:'/',
      state: { from: location }
    }} />)
    } />
  )
  }
  export default PrivateRoute;