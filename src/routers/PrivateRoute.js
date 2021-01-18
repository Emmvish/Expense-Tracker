import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header';

// In AppRouter.js file, we can see that component field is passed as a prop too.
export const PrivateRoute = (
	{ 
	isAuthenticated, 
	component: Component,
	// ...rest is used for destructuring rest of the properties in the prop.
	...rest
    }
	) => (
	<Route {...rest} component={(props)=>(
		isAuthenticated ? (
			<div>
				<Header/>
				<component {...props}/>
			</div>
		) : (
			<Redirect to="/"/>
		)
	)} />
)

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);
