import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({name: event.target.name.value, price: event.target.price.value, weight: event.target.weight.value, origin: event.target.origin.value, roast: event.target.roast.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeFormSubmission} 
        buttonText="Save" />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  onEditCoffee: PropTypes.func,
  coffee: PropTypes.object
};

export default EditCoffeeForm;