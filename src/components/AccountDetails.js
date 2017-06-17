import React from 'react';

class AccountDetails extends React.Component {

	render() {
		const {details} = this.props;
		return (
			<div className="account-details">
				<div className="in-line">
				<h1>{details.aname}</h1>
				<button className="btn pull-right">Edit</button>
				</div>
				<br />
				<div>
					<div>Account Owner</div> Praveen Kumar
					<div>Industry</div>{details.industry}
					<div>No. of Employees</div>{details.emps}
					<div>Annual Revenue</div>{details.revenue}
					<div>Phone</div> {details.phone} 
					<div>
						<h3>Contacts</h3>

						<div>Email</div> {details.email}
						<div>Phone</div> {details.phone} 
						<div>Mobile</div> {details.mobile}
					</div>
					<div>Account Status</div> {details.Accountstatus} 
				</div>
				<div className="account-info">
					<div><h3>Account Information</h3></div>
					<div>
						<div><span>Account Owner</span> <span>Praveen Kumar</span></div>
						<div><span>Account Name</span> <span>{details.aname}</span></div>
						<div><span>Account Website</span> <span>{details.website}</span></div>
						<div><span>Account Number</span> <span>{details.anumber}</span></div>
						<div><span>Account Type</span> <span>{details.accounttype}</span></div>
						<div>Industry</div>{details.industry}
						<div>Annual Revenue</div>{details.revenue}

						<div><span>Rating</span> <span>{details.rating} </span></div> 
						<div><span>Phone</span> <span>{details.phone} </span></div> 
						<div>Fax</div>{details.fax}
						<div>Website</div>{details.website}
						<div>Ticker Symbol</div> {details.ticker}
						<div>Ownership</div>{details.ownership}
						<div>No. of Employees</div>{details.emps}
					</div>
					
				</div>
				<div>
					<div><strong>Address Information</strong></div>
					<div>
						<div>Billing Address</div>{details.baddress}
						<div>Billing State</div>{details.bstate}
						<div>Billing City</div>{details.bcity}
						<div>Billing Zip Code</div>{details.bzip}
						<div>Billing Country</div>{details.bcountry}
					</div>
					<div>
						<div>Shipping Address</div>{details.saddress}
						<div>Shipping State</div>{details.sstate}
						<div>Shipping City</div>{details.scity}
						<div>Shipping Zip Code</div>{details.szip}
						<div>Shipping Country</div>{details.scountry}
					</div>
				</div>
				<div>
					<div><h3>Description Information</h3></div>
					<div>
						<div>Description</div>{details.desc}
					</div>
				</div>
				<div><h3>Potentials Information</h3></div>

			</div>
		)
	}

}

export default AccountDetails ;