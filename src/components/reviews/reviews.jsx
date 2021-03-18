import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {openReviewFormPopup} from "../../store/actions";
import {getReviews} from "../../store/selectors";
import ReviewItem from "../review-item/review-item";

const Reviews = (props) => {
  const {reviews, openPopup} = props;

  const onAddReviewButtonClick = (evt) => {
    evt.preventDefault();

    openPopup();
  };

  return (
    <div className="tabs__reviews reviews">
      <a
        onClick={onAddReviewButtonClick}
        href="#"
        className="reviews__submit-review button button--white"
      >
        оставить отзыв
      </a>

      <ul className="reviews__list">
        {reviews.map((review, i) => (
          <ReviewItem
            key={`review-item-${i}`}
            userName={review.userName}
            prosText={review.prosText}
            consText={review.consText}
            commentText={review.commentText}
            ratingStars={review.ratingStars}
            dateTime={review.dateTime}
          />
        ))}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    userName: PropTypes.string.isRequired,
    prosText: PropTypes.string,
    consText: PropTypes.string,
    commentText: PropTypes.string.isRequired,
    ratingStars: PropTypes.number,
    dateTime: PropTypes.string.isRequired,
  })),
  openPopup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  openPopup() {
    dispatch(openReviewFormPopup());
  }
});

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
