import React from 'react';

class ContactsForm extends React.Component {
  createContact(event) {
    event.preventDefault();
    const contact = {
      leadsource: this.leadsource.value,
      fname: this.fname.value,
      lname: this.lname.value,
      aname: this.aname.value,
      email: this.email.value,
      dep: this.dep.value,
      phone: this.phone.value,
      homphone: this.homphone.value,
      othphone: this.othphone.value,
      fax: this.fax.value,
      mobile: this.mobile.value,
      dob: this.dob.value,
      assistant: this.assistant.value,
      asstphone: this.asstphone.value,
      skype: this.skype.value,
      twitter: this.twitter.value,
      email2: this.email2.value,
      maddress: this.maddress.value,
      mcity: this.mcity.value,
      mstate: this.mstate.value,
      mzip: this.mzip.value,
      mcountry: this.mcountry.value,
      desc: this.desc.value,
    }

    this.props.addContact(contact);
    //this.contactForm.reset();

  }

  render() {
    return (
      <div className="contact">
      <div className="contact-header">
        <h1 className="contact">Create Contact</h1>
      </div>
      <div className="contact-form">
        <h3>Contact Information</h3>
      <form ref={(input) => this.contactForm = input} className="contact-edit" onSubmit={(e) => this.createContact(e)}>
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
        <input ref={(input) => this.fname = input} type="text" placeholder="First Name" />
        <input ref={(input) => this.lname = input} type="text" placeholder="Last Name" />
        <input ref={(input) => this.aname = input} type="text" placeholder="Account Name" />
        <input ref={(input) => this.email = input} type="text" placeholder="Email" />
        <input ref={(input) => this.dep = input} type="text" placeholder="Department" />
        <input ref={(input) => this.phone = input} type="text" placeholder="Phone" />
        <input ref={(input) => this.homphone = input} type="text" placeholder="Home Phone" />
        <input ref={(input) => this.othphone = input} type="text" placeholder="Other Phone" />
        <input ref={(input) => this.fax = input} type="text" placeholder="Fax" />
        <input ref={(input) => this.mobile = input} type="text" placeholder="Mobile" />
        <input ref={(input) => this.dob = input} type="text" placeholder="Date of Birth" />
        <input ref={(input) => this.assistant = input} type="text" placeholder="Assistant" />
        <input ref={(input) => this.asstphone = input} type="text" placeholder="Asst Phone" />
        <input ref={(input) => this.skype = input} type="text" placeholder="Skype Id" />
        <input ref={(input) => this.twitter = input} type="text" placeholder="Twitter Id" />
        <input ref={(input) => this.email2 = input} type="text" placeholder="Secondary Email" />
        

        <h3>Address Information</h3>

        <input ref={(input) => this.maddress = input} type="text" placeholder="Mailing Address" />
        <input ref={(input) => this.mcity = input} type="text" placeholder="Mailing City" />
        <input ref={(input) => this.mstate = input} type="text" placeholder="Mailing State" />
        <input ref={(input) => this.mzip = input} type="text" placeholder="Mailing Zip Code" />
        <input ref={(input) => this.mcountry = input} type="text" placeholder="Mailing Country" />
        
        <input ref={(input) => this.oaddress = input} type="text" placeholder="Other Address" />
        <input ref={(input) => this.ocity = input} type="text" placeholder="Other City" />
        <input ref={(input) => this.ostate = input} type="text" placeholder="Other State" />
        <input ref={(input) => this.ozip = input} type="text" placeholder="Other Zip Code" />
        <input ref={(input) => this.ocountry = input} type="text" placeholder="Other Country" />
        <h3>Description Information</h3>
        <textarea ref={(input) => this.desc = input} placeholder="Description" ></textarea>
        <div className="contact-buttons in-line">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="" className="btn btn-warning">Cancel</button>
        </div>
      </form>
      </div>
      </div>
    )
  }
}

export default ContactsForm;
