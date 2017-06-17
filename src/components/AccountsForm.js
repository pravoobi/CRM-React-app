import React from 'react';

class AccountsForm extends React.Component {
  createAccount(event) {
    event.preventDefault();
    console.log('Gonna make some Account!');
    const account = {
      aname: this.aname.value,
      website: this.website.value,
      anumber: this.anumber.value,
      accounttype: this.accounttype.value,
      industry: this.industry.value,
      revenue: this.revenue.value,
      rating: this.rating.value,
      phone: this.phone.value,
      fax: this.fax.value,
      ticker: this.ticker.value,
      ownership: this.ownership.value,
      emps: this.emps.value,
      baddress: this.baddress.value,
      bcity: this.bcity.value,
      bstate: this.bstate.value,
      bzip: this.bzip.value,
      bcountry: this.bcountry.value,
      saddress: this.saddress.value,
      scity: this.scity.value,
      sstate: this.sstate.value,
      szip: this.szip.value,
      scountry: this.scountry.value,
      desc: this.desc.value,
    }

    this.props.addAccount(account);
    //this.AccountForm.reset();

  }

  render() {
    return (
      <div className="account">
      <div className="account-header">
        <p className="account">Create Account</p>
      </div>
      <div className="account-form">
      <form ref={(input) => this.accountForm = input} className="Account-edit" onSubmit={(e) => this.createAccount(e)}>
        <input ref={(input) => this.aname = input} type="text" placeholder="Account Name" />
        <input ref={(input) => this.website = input} type="text" placeholder="Account Website" />
        <input ref={(input) => this.anumber = input} type="text" placeholder="Account Number" />
        <select ref={(input) => this.accounttype = input}>
          <option value="none">None</option>
          <option value="analyst">Analyst</option>
          <option value="competitor">Competitor</option>
          <option value="customer">Customer</option>
          <option value="distributor">Distributor</option>
          <option value="partner">Partner</option>
          <option value="prospect">Prospect</option>
          <option value="press">Press</option>
          <option value="supplier">Supplier</option>
          <option value="vendor">Vendor</option>
          <option value="reseller">Reseller</option>
        </select>
        <select ref={(input) => this.industry = input}>
          <option value="none">None</option>
          <option value="telecom">Telecom EOM</option>
          <option value="erp">ERP</option>
          <option value="govt">Government</option>
          <option value="enterprise">Large Enterprise</option>
          <option value="sme">Small/Medium Enterprise</option>
        </select>
        <input ref={(input) => this.revenue = input} type="text" placeholder="Annual Revenue" />


        <select ref={(input) => this.rating = input}>
          <option value="none">None</option>
          <option value="acquired">Acquired</option>
          <option value="active">Active</option>
          <option value="market-failed">Market Failed</option>
          <option value="cancel">Project Cancelled</option>
          <option value="shutdown">Shutdown</option>
        </select>
        <input ref={(input) => this.phone = input} type="text" placeholder="Phone" />
        <input ref={(input) => this.fax = input} type="text" placeholder="Fax" />
        <input ref={(input) => this.ticker = input} type="text" placeholder="Ticker Symbol" />   
        <select ref={(input) => this.ownership = input}>
          <option value="none">None</option>
          <option value="other">Other</option>
          <option value="private">Private</option>
          <option value="public">Public</option>
          <option value="subsidiary">Subsidiary</option>
        </select>
        <input ref={(input) => this.emps = input} type="text" placeholder="No. of Employees" />
        <h3>Addres Information</h3>
        <input ref={(input) => this.baddress = input} type="text" placeholder="Billing Address" />
        <input ref={(input) => this.bcity = input} type="text" placeholder="Billing City" />
        <input ref={(input) => this.bstate = input} type="text" placeholder="Billing State" />
        <input ref={(input) => this.bzip = input} type="text" placeholder="Billing Zip Code" />
        <input ref={(input) => this.bcountry = input} type="text" placeholder="Billing Country" />

        <input ref={(input) => this.saddress = input} type="text" placeholder="Shipping Address" />
        <input ref={(input) => this.scity = input} type="text" placeholder="Shipping City" />
        <input ref={(input) => this.sstate = input} type="text" placeholder="Shipping State" />
        <input ref={(input) => this.szip = input} type="text" placeholder="Shipping Zip Code" />
        <input ref={(input) => this.scountry = input} type="text" placeholder="Shipping Country" />
        <textarea ref={(input) => this.desc = input} placeholder="Description" ></textarea>
        <div className="account-buttons in-line">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="" className="btn btn-warning">Cancel</button>
        </div>
      </form>
      </div>
      </div>
    )
  }
}

export default AccountsForm;
