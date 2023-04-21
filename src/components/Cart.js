import React from "react";
import PropTypes from "prop-types";

function Cart(props) {

  return (
    <React.Fragment>
      <h3>Name: {props.name}</h3>
      <li>Price per pound:  ${props.price}</li><br />
    </React.Fragment >
  );
}

Cart.propTypes = {
  name: PropTypes.string,
  weight: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
}

export default Cart;