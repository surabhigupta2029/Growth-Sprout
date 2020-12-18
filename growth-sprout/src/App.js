import React from 'react'
import './App.css';
import Background from './components/Background';
// import Navbar from './components/Navbar';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact/>
      </Switch>
    </Router> */}
    <Background/>
    <div className = "Background" />
    </>
  );
}

export default App;
