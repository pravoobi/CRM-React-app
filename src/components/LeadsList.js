import React from 'react';
import Lead from './Lead';
import { Link } from 'react-router-dom';

  class LeadsList extends React.Component {

    render() {
      return( 
       <div className="menu table-responsive">
        <div><Link to='/newlead'><button className="btn pull-right add-lead">Add Lead</button></Link></div>
        <table className="table-lead table table-hover">
        <thead>
        <tr>
          <th>Lead Name</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
            {
              Object
                .keys(this.props.passLead())
                .map(key => <Lead key={key} index={key} details={this.props.passLead()[key]}/>)
            }
        </tbody>
        </table>
        </div>
      )
    } 

  }

export default LeadsList;
