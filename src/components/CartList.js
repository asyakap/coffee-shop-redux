import React from "react";
import Cart from "./Cart";
import PropTypes from "prop-types";


function CartList(props) {

  let total = 0;
  props.cartList.forEach(element => {
    total = parseInt(element.price) + total;
  });

  return (
    <React.Fragment>
      <hr></hr>
      <h3>Cart:</h3>
      {props.cartList.map((coffee) =>
        <Cart
          name={coffee.name}
          price={coffee.price}
          id={coffee.id}
          key={coffee.id}/>
      )}
      <h4>Total: ${total}</h4>
    </React.Fragment>
  );
}

CartList.propTypes = {
  cartList: PropTypes.array,
  onBuyCoffee: PropTypes.func,
  onCoffeeSelect: PropTypes.func
};

export default CartList;