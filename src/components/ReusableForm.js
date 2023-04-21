import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <br />
        <h5>Please enter details of a new Coffee bag:</h5>
        <input
          type='text'
          name='name'
          placeholder='Coffee Name' /><br />
        <input
          type='number'
          name='price'
          placeholder='Price per pound' /><br />
        <input
          type='number'
          name='weight'
          placeholder='Weight of the bag' /><br />
        <input
          type='text'
          name='origin'
          placeholder='Coffee Origin' /><br />
        <input
          type='text'
          name='roast'
          placeholder='Light, medium or dark' /><br />
          <br />
        <button className="btn btn-block btn-lg btn-dark" type='submit'>{props.buttonText}</button>
        <br />
        <br />
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};