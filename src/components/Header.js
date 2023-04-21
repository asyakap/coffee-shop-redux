import React from "react";
import banner from "./../img/banner.jpg"

function Header() {
  return (
    <React.Fragment>
      <div className="header-container" style={{ backgroundImage: `url(${banner})` }}> </div>
      <h1>Coffee Shop</h1>
     
      <h3>The best coffee sorts available in town. Price is per pound.</h3>
    </React.Fragment>
  );
}

export default Header;