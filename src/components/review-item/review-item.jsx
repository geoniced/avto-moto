import PropTypes from "prop-types";
import {STARS_COUNT} from "../../const";
import {getPassedDateFromNow, getFormattedDate} from "../../utils";

const convertRatingToText = (rating) => {
  let ratingText;

  switch (rating) {
    case 1:
    case 2:
      ratingText = `Не советую`;
      break;
    case 3:
    case 4:
    case 5:
      ratingText = `Советую`;
  }

  return ratingText;
};

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
            {new Array(STARS_COUNT).fill().map((_, index) => {
              return (
                <li key={`quote-star-${index}`} className="quote__rating-star">
                  <svg className={`quote__star-icon quote__star-icon--${index < ratingStars ? `red` : `gray`}`}>
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
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
  prosText: PropTypes.string.isRequired,
  consText: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  ratingStars: PropTypes.number.isRequired,
  dateTime: PropTypes.string.isRequired,
};

export default ReviewItem;
