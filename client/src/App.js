import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
// import Nav from "./components/Nav.js";
import Search from "./components/search-component";
import Saved from "./components/saved-component"; 
import logo from "./logo.png";


class App extends Component {
  render() {
    return (
      <Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="http://google.com" target="_blank">
              <img src={logo} width="80" height="40" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand"><h4>google search</h4></Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/saved" className="nav-link"><h4>saved</h4></Link>
                </li>
              
              </ul>
            </div>
          </nav>
        <Route path="/" exact component={Search}/>
        <Route path="/saved" component={Saved}/>
      
        </div>
      </Router>
    );
  }
}

export default App;
