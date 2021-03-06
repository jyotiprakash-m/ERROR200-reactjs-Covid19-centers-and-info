import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CovidDashboard from './CovidDashboard';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Navbar></Navbar>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/dashboard" component={CovidDashboard}/>
            <Route path="/aboutUs" component={AboutUs}/>
        </Switch>
        
        <Footer></Footer>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
