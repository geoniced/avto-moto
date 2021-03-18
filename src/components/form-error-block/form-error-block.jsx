import React from "react";
import PropTypes from "prop-types";

const FormErrorBlock = (props) => {
  const {errorMessage} = props;

  if (!errorMessage) {
    return null;
  }

  return (
    <p className="review-form__error-message">
      {errorMessage}
    </p>
  );
};

FormErrorBlock.propTypes = {
  errorMessage: PropTypes.string,
};

export default FormErrorBlock;
