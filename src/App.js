import React from 'react';
import {Route} from "react-router-dom"
import './App.css';
import  Login  from './components/Login';

function App() {
  return (
    <div className="App">
      Hello from App!
      <Route path="/" component={Login}/>
    </div>
  );
}

export default App;
