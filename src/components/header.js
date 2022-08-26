import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a href="#">Cybersoft</a>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
        </nav>
      </div>
    );
  }
}

export default Header;
