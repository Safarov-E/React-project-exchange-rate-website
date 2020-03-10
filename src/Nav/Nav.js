import React, {Component} from 'react';
import './Nav.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <Router>
      <div className="header-nav">
          <div className="container">
          <nav>
              <ul>
                  <li><Link to="/">Главная</Link></li>
                  {/* <li><Link to="/">Пункты обмена</Link></li> */}
                  <li><Link to="/about">О нас</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </Router>
    );
  }
}

export default Nav;
