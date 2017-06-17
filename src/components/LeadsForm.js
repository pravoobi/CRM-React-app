import React from 'react';

class LeadsForm extends React.Component {
  createLead(event) {
    event.preventDefault();
    console.log('Gonna make some Lead!');
    const lead = {
      fname: this.fname.value,
      lname: this.lname.value,
      company: this.company.value,
      email: this.email.value,
      phone: this.phone.value,
      fax: this.fax.value,
      mobile: this.mobile.value,
      website: this.website.value,
      leadsource: this.leadsource.value,
      leadstatus: this.leadstatus.value,
      industry: this.industry.value,
      emps: this.emps.value,
      revenue: this.revenue.value,
      skype: this.skype.value,
      twitter: this.twitter.value,
      address: this.address.value,
      city: this.city.value,
      state: this.state.value,
      zip: this.zip.value,
      country: this.country.value,
      desc: this.desc.value,
    }

    this.props.addLead(lead);
    //this.leadForm.reset();

  }

  render() {
    return (
      <div className="lead">
      <div className="lead-header">
        <h1 className="lead">Create Lead</h1>
      </div>
      <div className="lead-form">
      <form ref={(input) => this.leadForm = input} className="lead-edit" onSubmit={(e) => this.createLead(e)}>
        <input ref={(input) => this.fname = input} type="text" placeholder="First Name" />
        <input ref={(input) => this.lname = input} type="text" placeholder="Last Name" />
        <input ref={(input) => this.company = input} type="text" placeholder="Company" />
        <input ref={(input) => this.email = input} type="text" placeholder="Email" />
        <input ref={(input) => this.phone = input} type="text" placeholder="Phone" />
        <input ref={(input) => this.fax = input} type="text" placeholder="Fax" />
        <input ref={(input) => this.mobile = input} type="text" placeholder="Mobile" />
        <input ref={(input) => this.website = input} type="text" placeholder="Website" />
        <select ref={(input) => this.leadsource = input}>
          <option value="none">None</option>
          <option value="advertisement">Advertisement</option>
          <option value="employee-referral">Employee Referral</option>
          <option value="Partner">Partner</option>
          <option value="public-relations">Public Relations</option>
          <option value="trade-show">Trade Show</option>
          <option value="web-download">Web Download</option>
          <option value="web-research">Web Research</option>
          <option value="chat">Chat</option>
        </select>
        <select ref={(input) => this.leadstatus = input}>
          <option value="none">None</option>
          <option value="attempted">Attempted to Contact</option>
          <option value="future">Contact in Future</option>
          <option value="contacted">Contacted</option>
          <option value="junk">Junk Lead</option>
          <option value="lost">Lost Lead</option>
          <option value="not">Not Contacted</option>
        </select>
        <select ref={(input) => this.industry = input}>
          <option value="none">None</option>
          <option value="telecom">Telecom EOM</option>
          <option value="erp">ERP</option>
          <option value="govt">Government</option>
          <option value="enterprise">Large Enterprise</option>
          <option value="sme">Small/Medium Enterprise</option>
        </select>

        <input ref={(input) => this.emps = input} type="text" placeholder="No. of Employees" />
        <input ref={(input) => this.revenue = input} type="text" placeholder="Annual Revenue" />
        <input ref={(input) => this.skype = input} type="text" placeholder="Skype Id" />
        <input ref={(input) => this.twitter = input} type="text" placeholder="Twitter Id" />
        <input ref={(input) => this.address = input} type="text" placeholder="Address" />
        <input ref={(input) => this.city = input} type="text" placeholder="City" />
        <input ref={(input) => this.state = input} type="text" placeholder="State" />
        <input ref={(input) => this.zip = input} type="text" placeholder="Zip Code" />
        <input ref={(input) => this.country = input} type="text" placeholder="Country" />
        <textarea ref={(input) => this.desc = input} placeholder="Description" ></textarea>
        <div className="lead-buttons in-line">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="" className="btn btn-warning">Cancel</button>
        </div>
      </form>
      </div>
      </div>
    )
  }
}

export default LeadsForm;
