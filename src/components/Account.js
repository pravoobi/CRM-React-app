import React from 'react';
import { Link } from 'react-router-dom';

class Account extends React.Component {

	render() {
		const {details, index} = this.props;
		return (
			<tr className="menu-account">
				<td><Link to={`/accountsfull/${index}`} id={index}>{details.aname}</Link></td>
				<td>{details.phone} </td>
				<td>{details.website}</td>
			</tr>
		)
	}

}

export default Account ;