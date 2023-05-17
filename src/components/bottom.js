import React, { Component } from 'react';
import '../styles/bottom.css';

class BottomBar extends Component {

    constructor() {
        super();
        this.state = {
          showText: false,
        };
      }
    
      toggleText = () => {
        this.setState({ showText: !this.state.showText });
      };


  render() {
    return (
      <div className="bottom-container">
        <div className="bottom-text">
        © 2023 by Pepe Peso. All rights reserved, just like the last taco.</div>
      </div>
    );
  }
}

export default BottomBar;
