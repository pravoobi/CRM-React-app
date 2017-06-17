import React from 'react';
import AccountDetails from './AccountDetails';


class AccountsFull extends React.Component {
 	render() {

 		return(
 			<div className="Account-details">
         		<AccountDetails key={this.props.match.params.index} index={this.props.match.params.index}
               	 details={this.props.passAccount()[this.props.match.params.index]} />
        	</div>
 		)
 	}

}
export default AccountsFull;       
