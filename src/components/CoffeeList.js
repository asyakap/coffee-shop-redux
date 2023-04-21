import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";


function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.coffeeList.map((coffee) =>
        <Coffee
          name={coffee.name}
          origin={coffee.origin}
          roast={coffee.roast}
          weight={coffee.weight}
          price={coffee.price}
          onBuyCoffee={props.onBuyCoffee}
          onCoffeeSelect={props.onCoffeeSelect}
          id={coffee.id}
          key={coffee.id}/>
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onBuyCoffee: PropTypes.func,
  onCoffeeSelect: PropTypes.func
};

export default CoffeeList;