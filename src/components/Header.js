import React from "react";
import banner from "./../img/banner.jpg"

function Header() {
  return (
    <React.Fragment>
      <div className="header-container" style={{ backgroundImage: `url(${banner})` }}> </div>
      <h1>Coffee Shop</h1>
      <h4>The best coffee sorts available in town. Price is per pound.</h4>
      <p><em>* Color code for coffee prices: <span style={{color: 'red'}}>Red - $10+</span>, <span style={{color: 'orange'}}>Orange - $5-9</span>, <span style={{color: 'green'}}>Green - less than $5</span>.</em></p>
    </React.Fragment>
  );
}

export default Header;