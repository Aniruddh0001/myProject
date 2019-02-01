import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../../styleSheets/css/layout.scss';
import App from '../../Container/App/App';
import About from '../../Components/About/About';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Contact from '../../Components/Contact/Contact';
import Login from '../../Components/Login/Login';

const Nav = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link"  to="/Contact">Contact Us</Link>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="dropdown">
              <Link className="nav-link dropdown-toggle"  to="/Login" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Login</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact component={ App }/>
        <Route path="/about" exact component={ About }/>
        <Route path="/portfolio" exact component={ Portfolio }/>
        <Route path="/contact" exact component={ Contact }/>
        <Route path="/Login" exact component={ Login }/>
      </Switch>
    </div>
  </Router>
);

export default Nav;
