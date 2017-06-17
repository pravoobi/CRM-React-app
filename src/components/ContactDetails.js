import React from 'react';

class ContactDetails extends React.Component {

	render() {
		const {details} = this.props;
		return (
			<div className="contact-details">
				<div className="in-line">
				<h1>{details.fname} {details.lname}</h1> - <p>{details.aname}</p> 
				<button className="btn">Send Email</button>
				<button className="btn">Edit</button>
				</div>
				<div>
					<div>Contact Owner</div> Praveen Kumar
					<div>Email</div> {details.email}
					<div>Phone</div> {details.phone} 
					<div>Mobile</div> {details.mobile}
					<div>Department</div> {details.dep} 
				</div>
				<div className="contact-info">
					<div><h3>Contact Information</h3></div>
					<div>
						<div><span>Contact Owner</span> <span>Praveen Kumar</span></div>
						<div>Lead Source</div>{details.leadsource}
						<div><span>Account Name</span> <span>{details.aname} </span></div> 
						<div><span>Contact Name</span> <span>{details.fname} {details.lname}</span></div> 
						<div>Email</div>{details.email}
						<div><span>Phone</span> <span>{details.phone} </span></div> 
						<div>Department</div> {details.dep} 
						<div><span>Other Phone</span> <span>{details.othphone} </span></div> 
						<div><span>Home Phone</span> <span>{details.homphone} </span></div> 
						<div>Mobile</div> {details.mobile}
						<div>Fax</div>{details.fax}
						<div><span>Assistant</span> <span>{details.assistant} </span></div> 
						<div><span>Asst Phone</span> <span>{details.asstphone} </span></div> 
						<div><span>Date of Birth</span> <span>{details.dob} </span></div> 
						<div>Skype Id</div>{details.skype}
						<div>Twitter</div>{details.twitter}
					</div>
				</div>
				<div>
					<div><h3>Address Information</h3></div>
					<div>
						<div>Mailing Address</div>{details.maddress}
						<div>Mailing City</div>{details.mcity}
						<div>Mailing State</div>{details.mstate}
						<div>Mailing Country</div>{details.mcountry}
						<div>Mailing Zip Code</div>{details.mzip}
					</div>
					<div>
						<div>Other Address</div>{details.oaddress}
						<div>Other City</div>{details.ocity}
						<div>Other State</div>{details.ostate}
						<div>Other Country</div>{details.ocountry}
						<div>Other Zip Code</div>{details.ozip}
					</div>
				</div>
				<div>
					<div><strong>Description Information</strong></div>
					<div>
						<div>Description</div>{details.desc}
					</div>
				</div>
			</div>
		)
	}

}

export default ContactDetails ;