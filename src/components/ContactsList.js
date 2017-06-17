import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';

  class ContactsList extends React.Component {

    render() {
      return( 
       <div className="menu table-responsive">
        <div><Link to='/newcontact'><button className="btn pull-right add-contact"> + Contact</button></Link></div>
        <table className="table-contact table table-hover">
        <thead>
        <tr>
          <th>CONTACT NAME</th>
          <th>PHONE</th>
          <th>EMAIL</th>
        </tr>
        </thead>
        <tbody>
            {
              Object
                .keys(this.props.passContact())
                .map(key => <Contact key={key} index={key} details={this.props.passContact()[key]}/>)
            }
        </tbody>
        </table>
        </div>
      )
    } 

  }

export default ContactsList;
