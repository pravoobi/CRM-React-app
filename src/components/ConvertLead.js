import React from 'react';
import { Link } from 'react-router-dom';

class ConvertLead extends React.Component {

	render(){
		const {details,aindex,cindex} = this.props.passLead();
		const {index} = this.props.match.params;

		console.log(this.props.passLead()[index]);
		console.log(this.props.passLead());

		console.log(index);
		return(
			<div className="convert-lead">
				<h1>ConvertLead</h1><p>{details.fname}{details.lname}-{details.company}</p>
				<div>New Account created:</div><Link to={`/accountsfull/${aindex}`} id={aindex}>{details.company}</Link>
				<div>New Contact created:</div><Link to={`/contactsfull/${cindex}`} id={aindex}>{details.fname}{details.lname}</Link>
			</div>

		)
	}
}

export default ConvertLead;