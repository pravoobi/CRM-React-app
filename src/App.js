import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
class App extends Component {
  constructor() {
    super();
    this.addLead = this.addLead.bind(this);
    this.passLead = this.passLead.bind(this);
    this.convertLead = this.convertLead.bind(this);
    this.addAccount = this.addAccount.bind(this);
    this.passAccount = this.passAccount.bind(this);
    this.addContact = this.addContact.bind(this);
    this.passContact = this.passContact.bind(this);


  }

  state = {
    leads: {
      lead1:{fname: 'Ramesh', lname: 'Kumar', company: 'Rocket Corp', phone: '08562-55478', email: 'ramesh@gmail.com'},
      lead2:{fname: 'Bramharama', lname: 'lakshmi', company: 'L Oreal', phone: '04462-55478', email: 'bramha@gmail.com'}
    },
    accounts:{
      account1: {accounttype:"none",aname:"Raghu Inc",anumber:"989438584",website:"www.rinc.com",industry:"none",ownership:"none",phone:"98485965486"}
    },
    contacts:{
      contact1: {fname: "Jagadeesh", lanme: "Kumar", phone: "080-48547584", email: "jagadeesh.pala@gmail.com"}
    }
  };

  addLead(lead) {
    //update our state
    const leads = {...this.state.leads};
    //add in our lead
    const timestamp = Date.now();
    leads[`lead-${timestamp}`] = lead;
    //set state
    this.setState({ leads });
  }

  passLead() {
    return this.state.leads;
  }

  convertLead(key) {
    //update state
    const leads = {...this.state.leads};
    const accounts = {...this.state.accounts};
    const contacts = {...this.state.contacts};
    //copy lead state details and copy into accounts and contacts
    const timestamp = Date.now();

    accounts[`account-${timestamp}`] = {
      aname: leads[key].company,
      website: leads[key].website,
      industry: leads[key].industry,
      revenue: leads[key].revenue,
      phone: leads[key].phone,
      fax: leads[key].fax,
      emps: leads[key].emps,
      baddress: leads[key].address,
      bcity: leads[key].city,
      bstate: leads[key].state,
      bzip: leads[key].zip,
      bcountry: leads[key].country,
      desc: leads[key].desc,
    };
    contacts[`contact-${timestamp}`] = {
      leadsource: leads[key].leadsource,
      fname: leads[key].fname,
      lname: leads[key].lname,
      aname: leads[key].company,
      email: leads[key].email,
      phone: leads[key].phone,
      fax: leads[key].fax,
      mobile: leads[key].mobile,
      skype: leads[key].skype,
      twitter: leads[key].twitter,
      maddress: leads[key].address,
      mcity: leads[key].city,
      mstate: leads[key].state,
      mzip: leads[key].zip,
      mcountry: leads[key].country,
      desc: leads[key].desc,
    };
    leads[key] = null;
    this.setState({ accounts, contacts,leads  });
    //history.push(`/converted/${key}`)
  }

  addAccount(account) {
    //update our state
    const accounts = {...this.state.accounts};
    //add in our account
    const timestamp = Date.now();
    accounts[`account-${timestamp}`] = account;
    //set state
    this.setState({ accounts });
  }

  passAccount() {
    return this.state.accounts;
  }

  addContact(contact) {
    //update our state
    const contacts = {...this.state.contacts};
    //add in our contact
    const timestamp = Date.now();
    contacts[`contact-${timestamp}`] = contact;
    //set state
    this.setState({ contacts });
  }

  passContact() {
    return this.state.contacts;
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Main addLead={this.addLead} passLead={this.passLead} addAccount={this.addAccount} 
        convertLead={this.convertLead} passAccount={this.passAccount} addContact={this.addContact}
         passContact={this.passContact} />
      </div>
    )
  }
}

export default App;
