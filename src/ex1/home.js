// header + footer + content + sidebar => home => app
import React, { Component } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

// JSX : thành phần mở rộng của Javascript
class Home extends Component {
  fullName = "hieu";
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <Content />
          <Sidebar />
        </div>
        <input id="txtInput" />
        <img />
        <label htmlFor="txtInput">testtt</label>
        <Footer />
      </div>
    );
  }
}

export default Home;
