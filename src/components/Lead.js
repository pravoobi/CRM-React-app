import React from 'react';
import { Link } from 'react-router-dom';

class Lead extends React.Component {

	render() {
		const {details, index} = this.props;
		return (
			<tr className="menu-lead">
				<td><Link to={`/leadsfull/${index}`} id={index}>{details.fname} {details.lname}</Link></td>
				<td>{details.company} </td>
				<td>{details.phone} </td>
				<td>{details.email}</td>
			</tr>
		)
	}

}

export default Lead ;