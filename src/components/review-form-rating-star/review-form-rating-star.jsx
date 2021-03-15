import {Fragment, memo} from "react";
import PropTypes from "prop-types";
import {ReactComponent as IconStarBig} from "../../assets/img/icon-star-big.svg";

const ReviewFormRatingStar = (props) => {
  const {starIndex, checked, onRatingChange} = props;

  return (
    <Fragment>
      <input
        onChange={onRatingChange}
        value={starIndex}
        checked={checked}
        id={`review-star-${starIndex}`}
        className="review-form__rating-star visually-hidden"
        name="review-star"
        type="radio"
      />
      <label htmlFor={`review-star-${starIndex}`} className="review-form__rating-star-label">
        <IconStarBig className="review-form__star-icon" />
        <span className="visually-hidden">Оценка: {starIndex}</span>
      </label>
    </Fragment>
  );
};

ReviewFormRatingStar.propTypes = {
  starIndex: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default memo(ReviewFormRatingStar);
