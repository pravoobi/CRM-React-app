import React from 'react';
import LeadDetails from './LeadDetails';

class LeadsFull extends React.Component {
 	render() {
		const {index} = this.props.match.params;

 		return(
 			<div className="lead-details">
         	<LeadDetails key={index} index={index} details={this.props.passLead()[index]} 
         	con={this.props.convertLead} />
		  
        	</div>
 		)
 	}

}
export default LeadsFull;       
//