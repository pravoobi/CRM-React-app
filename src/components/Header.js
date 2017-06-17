import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-inverse">
			   	 <div className="container-fluid">
			      <div className="nav-header">
			        <a className ="nav-brand text-center" href="#"><h3>CRM</h3></a>
			      </div>
			      <ul className="nav navbar-nav nav-list">
			        <li className="active"><Link to='/home'>Home</Link></li>
			        <li><Link to='/leads'>Leads</Link></li>
			        <li><Link to='/accounts'>Accounts</Link></li>
			        <li><Link to="/contacts">Contacts</Link></li>
			        <li><Link to="/potentials">Potentials</Link></li>
			      </ul>
			    </div>
			</nav>
		)
	}

}

export default Header ;