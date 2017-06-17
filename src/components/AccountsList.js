import React from 'react';
import Account from './Account';
import { Link } from 'react-router-dom';

  class AccountsList extends React.Component {

    render() {
      return( 
       <div className="menu table-responsive">
        <div><Link to='/newaccount'><button className="btn pull-right add-account">+ Account</button></Link></div>
        <table className="table-account table table-hover">
        <thead>
        <tr>
          <th>Account Name</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        </thead>
        <tbody>
            {
              Object
                .keys(this.props.passAccount())
                .map(key => <Account key={key} index={key} details={this.props.passAccount()[key]}/>)
            }
        </tbody>
        </table>
        </div>
      )
    } 

  }

export default AccountsList;
