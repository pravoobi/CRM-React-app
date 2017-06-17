import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {

	render() {
		const {details, index} = this.props;
		return (
			<tr className="menu-Contact">
				<td><Link to={`/contactsfull/${index}`} id={index}>{details.fname} {details.lname}</Link></td>
				<td>{details.phone} </td>
				<td>{details.email}</td>
			</tr>
		)
	}

}

export default Contact;