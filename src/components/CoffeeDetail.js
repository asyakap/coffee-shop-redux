import React from "react";
import PropTypes from "prop-types";


function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Coffee Details</h1><br />
      <h3>{coffee.name} - {coffee.origin}</h3><br />
      <p><em>Roast - {coffee.roast}</em></p><br />
      <p><em>Price - {coffee.price}</em></p><br />
      <p><em>Remaining - {coffee.weight}lb.</em></p><br />
      <button onClick={ props.onClickingEdit }>Update</button> <br />
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete</button> 
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default CoffeeDetail;