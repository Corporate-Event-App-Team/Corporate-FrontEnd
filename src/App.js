import React from 'react';
import {Route} from "react-router-dom"
import {connect} from "react-redux";
import './App.css';
import  Login  from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import  Dashboard  from './components/DashBoard';
import * as actionCreators from "./state/actionCreators";
import AddEvents from './components/AddEvents';
import Register from './components/Register';
import ReactNotification from 'react-notifications-component'

export function App(props) {
  return (
    <div className="App">
      <ReactNotification />
      <Route exact path="/" component={Login}/>
      <Route  path="/register" component={Register} />
      <PrivateRoute
         exact path="/dashboard"
          component={Dashboard}
        />
         <Route  path="/dashboard/add-event" component={AddEvents}/>
    </div>
  );
}

export default connect(state => state, actionCreators)(App);
