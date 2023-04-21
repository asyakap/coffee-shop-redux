import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Coffee Name' /><br />
        <input
          type='number'
          name='price'
          placeholder='Price per pound' /><br />
        <input
          type='text'
          name='origin'
          placeholder='Coffee Origin' /><br />
        <input
          type='text'
          name='roast'
          placeholder='light, medium or dark' /><br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};