// rce  + rafce

import React, { Component } from "react";

export class Footer extends Component {
  name = "Hieu";
  age = 12;

  showMessage() {
    alert("Hello World!");
  }

  showMessage2(message) {
    alert(message);
  }

  render() {
    return (
      <div>
        <button onClick={this.showMessage}>Show message</button>
        <button onClick={() => this.showMessage2("hello")}>
          Show Message{" "}
        </button>

        <h1>Footer</h1>
        <p>Name: {this.name} </p>
        <p>Age: {this.age}</p>
        {1 + 2 / 3}
        {/* { this.showMessage() } */}
      </div>
    );
  }
}

export default Footer;
