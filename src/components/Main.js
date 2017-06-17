import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LeadsList from './LeadsList';
import LeadsForm from './LeadsForm';
import LeadsFull from './LeadsFull';
import AccountsList from './AccountsList';
import AccountsForm from './AccountsForm';
import AccountsFull from './AccountsFull';
import ContactsForm from './ContactsForm';
import ContactsList from './ContactsList';
import ContactsFull from './ContactsFull';
import ConvertLead from './ConvertLead';

import Home from './Home';
import '../App.css';



class Main extends React.Component {
	render() {
		return(
		  <Switch>
		  <Route exact path="/" component={Home} />
		  <Route exact path="/home" component={Home} />
		  <Route exact path="/leads" render={ (props) => (<LeadsList passLead={this.props.passLead} {...props} />)} />
		  <Route exact path="/newlead" render={ (props) => (<LeadsForm addLead={this.props.addLead} {...props} />)} />
		  <Route exact path="/leadsfull/:index" render={ (props) => (<LeadsFull passLead={this.props.passLead} 
		  	convertLead={this.props.convertLead} addAccount={this.props.addAccount} addContact={this.props.addContact} {...props} />)}  />
		  <Route exact path="/converted/:index" render={ (props) => (<ConvertLead passLead={this.props.passLead} 		  	{...props} />)}  />}
		  <Route exact path="/accounts" render={ (props) => (<AccountsList passAccount={this.props.passAccount} {...props} />)} />
		  <Route exact path="/newaccount" render={ (props) => (<AccountsForm addAccount={this.props.addAccount} {...props} />)} />
		  <Route exact path="/accountsfull/:index" render={ (props) => (<AccountsFull passAccount={this.props.passAccount} {...props} />)}  />
		  <Route exact path="/contacts" render={ (props) => (<ContactsList passContact={this.props.passContact} {...props} />)} />
		  <Route exact path="/newcontact" render={ (props) => (<ContactsForm addContact={this.props.addContact} {...props} />)} />
		  <Route exact path="/contactsfull/:index" render={ (props) => (<ContactsFull passContact={this.props.passContact} {...props} />)} />
		  </Switch>
		)
	}
}


export default Main;