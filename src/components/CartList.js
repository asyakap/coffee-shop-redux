import React from "react";
import Cart from "./Cart";
import PropTypes from "prop-types";


function CartList(props) {
  return (
    <React.Fragment>
      <hr/>
      <h3>Cart:</h3>
      {props.cartList.map((coffee) =>
        <Cart
          name={coffee.name}
          price={coffee.price}
          id={coffee.id}
          key={coffee.id}/>
      )}
    </React.Fragment>
  );
}

CartList.propTypes = {
  cartList: PropTypes.array,
  onBuyCoffee: PropTypes.func,
  onCoffeeSelect: PropTypes.func
};

export default CartList;