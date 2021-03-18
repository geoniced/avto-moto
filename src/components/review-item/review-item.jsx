import React from "react";
import PropTypes from "prop-types";
import {STARS_COUNT} from "../../const";
import {getPassedDateFromNow, getFormattedDate, convertRatingToText} from "../../utils";
import {ReactComponent as IconStarSmall} from "../../assets/img/icon-star-small.svg";

const ReviewItem = (props) => {
  const {
    userName,
    prosText,
    consText,
    commentText,
    ratingStars,
    dateTime,
  } = props;

  const conclusionText = convertRatingToText(ratingStars);

  return (
    <li className="reviews__item">
      <blockquote className="reviews__quote quote">
        <cite className="quote__author">{userName}</cite>
        <dl className="quote__descriptions">
          <div className="quote__descriptions-row-wrapper quote__descriptions-row-wrapper--pros">
            <dt className="quote__subtitle quote__subtitle">Достоинства</dt>
            <dd className="quote__value quote__value">{prosText}</dd>
          </div>

          <div className="quote__descriptions-row-wrapper quote__descriptions-row-wrapper--cons">
            <dt className="quote__subtitle quote__subtitle">Недостатки</dt>
            <dd className="quote__value quote__value">{consText}</dd>
          </div>

          <div className="quote__descriptions-row-wrapper quote__descriptions-row-wrapper--no-icon">
            <dt className="quote__subtitle quote__subtitle--comment">Комментарий</dt>
            <dd className="quote__value quote__value--comment">{commentText}</dd>
          </div>
        </dl>

        <div className="quote__rating">
          <p className="visually-hidden">Оценка: {ratingStars}</p>
          <ul className="quote__rating-stars">
            {new Array(STARS_COUNT).fill(``).map((_, index) => {
              return (
                <li key={`quote-star-${index}`} className="quote__rating-star">
                  <IconStarSmall className={`quote__star-icon quote__star-icon--${index < ratingStars ? `red` : `gray`}`} />
                </li>
              );
            })}
          </ul>

          <p className="quote__rating-text">{conclusionText}</p>
        </div>

        <p className="quote__actions">
          <time className="quote__time" dateTime={getFormattedDate(dateTime)}>{getPassedDateFromNow(dateTime)}</time>
          <a href="#" className="quote__reply">Ответить</a>
        </p>
      </blockquote>
    </li>
  );
};

ReviewItem.propTypes = {
  userName: PropTypes.string.isRequired,
  prosText: PropTypes.string,
  consText: PropTypes.string,
  commentText: PropTypes.string.isRequired,
  ratingStars: PropTypes.number,
  dateTime: PropTypes.string.isRequired,
};

export default ReviewItem;
