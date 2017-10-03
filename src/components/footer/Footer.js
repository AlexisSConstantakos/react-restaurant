import React, { Component } from 'react';
//no braces means it's the default, braces means it's one of many
import './Footer.css';

class Footer extends Component {
  render() {
    return (

        <nav className="navbar navbar-inverse navbar-bottom">
      <div className="container-fluid">

        <div className="navbar-footer">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="...">Eating is fun</a>
        </div>


        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="...">Facebook</a></li>
            <li><a href="...">Twitter</a></li>
          </ul>
        </div>
      </div>
    </nav>

    );
    }
}

export default Footer;