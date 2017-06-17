import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class LeadDetails extends React.Component {

	render() {
		const {details,index} = this.props;
		return (
			<div className="lead-details container-fluid">
				<div className=" lead-main-block">
				<div className="lead-details-btns pull-right col-sm-8 float">
				<button className="btn">Send Email</button>
				<Link to={`/converted/${index}`}>
					<button className="btn" onClick={() => this.props.con(index)}>Convert</button>
				</Link>
				<button className="btn">Edit</button>
				</div>

				<div className="leaddetails-name in-line pull-left col-sm-8">
				<p><strong>{details.fname} {details.lname}</strong> - {details.company}</p></div>
								</div>
				<div>
					<div>Lead Owner:</div> Praveen Kumar
					<div>Email</div> {details.email}
					<div>Phone</div> {details.phone} 
					<div>Mobile</div> {details.mobile}
					<div>Lead Status</div> {details.leadstatus} 
				</div>
				<div className="lead-info">
					<div><strong>Lead Information</strong></div>
					<div>
						<div><span>Lead Owner</span> <span>Praveen Kumar</span></div>
						<div><span>Phone</span> <span>{details.phone} </span></div> 
						<div>Mobile</div> {details.mobile}
						<div>Lead Source</div>{details.leadsource}
						<div>Industry</div>{details.industry}
						<div>Annual Revenue</div>{details.revenue}
					</div>
					<div>
						<div>company</div>{details.company}
						<div>Lead Name</div>{details.fname} {details.lname}
						<div>Email</div>{details.email}
						<div>Fax</div>{details.fax}
						<div>Website</div>{details.website}
						<div>Lead Status</div>{details.leadstatus}
						<div>No. of Employees</div>{details.emps}
						
						<div>Skype Id</div>{details.skype}
						<div>Twitter</div>{details.twitter}
					</div>
					
						
					
				</div>
				<div>
					<div><strong>Address Information</strong></div>
					<div>
						<div>Address</div>{details.address}
						<div>State</div>{details.state}
						<div>Country</div>{details.country}
					</div>
					<div>
						<div>City</div>{details.city}
						<div>Zip Code</div>{details.zip}
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

export default LeadDetails ;