import React, { Component } from 'react';
//no braces means it's the default, braces means it's one of many
import './Cards.css';

class Cards extends Component {
  render() {
    return (

      <div className="card">
        <img src={this.props.src} className="images"/>
        <h3>{this.props.name}</h3>
        <a href={this.props.title}> {this.props.link}</a>
      </div>

    );
}
}
export default Cards;
