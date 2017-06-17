import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import './App.css';


const Root = () => {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
}

ReactDOM.render(( <Root />), document.getElementById('main'));
//registerServiceWorker();
