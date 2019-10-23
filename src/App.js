import React from 'react';
import {Route} from "react-router-dom"
import {connect} from "react-redux";
import './App.css';
import  Login  from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import  Dashboard  from './components/DashBoard';
import * as actionCreators from "./state/actionCreators";
import AddEvents from './components/AddEvents';

export function App(props) {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <PrivateRoute
         exact path="/dashboard"
          component={Dashboard}
        />
         <Route  path="/dashboard/add-event" component={AddEvents}/>
    </div>
  );
}

export default connect(state => state, actionCreators)(App);
