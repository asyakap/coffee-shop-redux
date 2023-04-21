import React from "react";
import PropTypes from "prop-types";

function Coffee(props){


  let coffeeDisplay = null;
  let coffeeBuy = null;
  if (props.weight <= 0) {
    coffeeDisplay = 
    <>
    <h4>{props.name} is <strong>Out of Stock</strong></h4>
    <hr></hr>
    </ >
  } else if (props.weight < 10 & props.weight > 0) {
    coffeeDisplay =
    <>
    <h3>Name: {props.name}</h3>
    <h3 style={{color: 'red'}}>Almost Empty</h3>
    <li>Origin: {props.origin}</li><br />
    <li>Roast: {props.roast}</li><br />
    <li>Price per pound: ${props.price}</li><br />
    <li>Quantity Available: {props.weight}lb.</li>
    <br />
    </>
    coffeeBuy = 
    <>
    <button className="btn btn-block btn-lg btn-dark">Buy</button>
    <hr></hr>
    </>
  } else {
    coffeeDisplay =
    <>
    <h3>Name: {props.name}</h3><br />
    <li>Origin: {props.origin}</li><br />
    <li>Roast: {props.roast}</li><br />
    <li>Price per pound: ${props.price}</li><br />
    <li>Quantity Available: {props.weight}lb.</li>
    <br />
    </>
    coffeeBuy = 
    <>
    <button className="btn btn-block btn-lg btn-dark">Buy</button>
    <hr></hr>
    </>

  }

  return (
    <React.Fragment>
      <div onClick={() => props.onCoffeeSelect(props.id)}>
      {coffeeDisplay}
      </div>
      <div onClick={() => props.onBuyCoffee(props.id)}>
      {coffeeBuy}
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  weight: PropTypes.number,
  price: PropTypes.number,
  origin: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  onBuyCoffee: PropTypes.func,
  onCoffeeSelect: PropTypes.func
}

export default Coffee;