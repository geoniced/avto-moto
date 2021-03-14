import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";

dayjs.locale(`ru`);
dayjs.extend(relativeTime);

window.dayjs = dayjs;
export const extend = (a, b) => Object.assign({}, a, b);

export const createFieldChangeHandler = (fieldName, setter, isNumeric = false) => {
  return (evt) => {
    let value = evt.target.value;
    if (isNumeric) {
      value = Number(value);
    }

    window.localStorage.setItem(fieldName, value);
    setter(value);
  };
};

export const getFormattedDate = (date) => {
  return dayjs(date).format(`YYYY-MM-DDTHH:mm`);
};

export const getPassedDateFromNow = (date) => {
  return dayjs(date).fromNow();
};

export const isInvalidValidation = (validation) => validation === false;

export const checkFieldValidity = ({value, field, validationFunction, setter, errorMessage}) => {
  let isValid = true;

  if (validationFunction(value)) {
    setter((prevState) => {
      return extend(prevState, {
        [field]: ``,
      });
    });
  } else {
    isValid = false;
    setter((prevState) => {
      return extend(prevState, {
        [field]: errorMessage,
      });
    });
  }

  return isValid;
};
