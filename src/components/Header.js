import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth.js'

const Header = ({startLogout}) => (
  <header className="header">
  	<div className="content-container">
  		<div className="header__content">
    		<Link to="/dashboard" className="header__title">
    			<h1>Expensify</h1>
    		</Link>
    	</div>
    </div>
    <button onClick={startLogout} className="button button--link">Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch)=>({
	startLogout: ()=>dispatch(startLogout)
})

export default connect(undefined,mapDispatchToProps)(Header);

//     <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>