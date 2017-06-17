import React from 'react';
import ContactDetails from './ContactDetails';


class ContactsFull extends React.Component {
 	render() {

 		return(
 			<div className="contact-details">
         	<ContactDetails key={this.props.match.params.index} index={this.props.match.params.index} details={this.props.passContact()[this.props.match.params.index]} />
		  
        	</div>
 		)
 	}

}
export default ContactsFull;       
