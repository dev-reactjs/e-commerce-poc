import React from 'react'
import {Route,Redirect, useLocation} from "react-router-dom"
const PublicRoute = ({ children, ...rest}) => {
  const isAuth =true;
	const restricted=true;
	return (
    <Route {...rest} render={({}) =>isAuth && restricted ?(children):(<Redirect to={{ 
			pathname:'/Login'
		 }} />)
    } />
  )
  }
  export default PublicRoute;