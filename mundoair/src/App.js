import React, { Component } from 'react';

import './App.css';
import Form from './components/formPage.js'
import HomePage from './components/homePage.js'
import ResultPage from './components/ResultPage'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
//import configureStore from './store/configureStore.js'
import { Route,Switch, Link, BrowserRouter as Router } from 'react-router-dom'

import fetchReducer from './reducers/fetchReducer.js'
const store=createStore(fetchReducer);
const  state=store.getState();
class App extends Component {
  render() {
    return (
      <div className="App">
      	<Provider store={store}>
  <Router>
  <Switch>
	 <Route exact path ="/" component={HomePage}  />
   <Route exact path="/info" component={Form} />
   <Route exact path="/results" component={ResultPage} />
   </Switch>
   </Router>
	</Provider>
      </div>
    );
  }
}

export default App;
