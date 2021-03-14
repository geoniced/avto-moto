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
