import React from "react";
import PropTypes from "prop-types";

function Cart(props) {

  return (
    <React.Fragment>
      <h6>{props.name} - ${props.price}</h6>
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