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
