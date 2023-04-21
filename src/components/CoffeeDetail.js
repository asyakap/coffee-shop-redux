import React from "react";
import PropTypes from "prop-types";


function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props; 

  return (

    <React.Fragment>
      <hr/>
      <h4>Coffee Details</h4><br />
      <h5>{coffee.name} - {coffee.origin}</h5>
      <p>Roast - {coffee.roast}</p>
      <p>Price - ${coffee.price}</p>
      <p><em>Remaining - {coffee.weight}lb</em></p><br />
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