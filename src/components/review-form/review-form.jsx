import {connect} from "react-redux";
import PropTypes from "prop-types";
import {closeReviewFormPopup} from "../../store/actions";
import {createRef, useCallback, useEffect, useState} from "react";
import ReviewFormRatingStar from "../review-form-rating-star/review-form-rating-star";

const STARS_COUNT = 5;

const ReviewForm = (props) => {
  const {closePopupAction} = props;

  const [nameValue, setNameValue] = useState(``);
  const [prosValue, setProsValue] = useState(``);
  const [consValue, setConsValue] = useState(``);
  const [starsValue, setStarsValue] = useState(null);
  const [commentValue, setCommentValue] = useState(``);

  const onNameChange = (evt) => {
    setNameValue(evt.target.value);
  };

  const onProsChange = (evt) => {
    setProsValue(evt.target.value);
  };

  const onConsChange = (evt) => {
    setConsValue(evt.target.value);
  };

  const onCommentChange = (evt) => {
    setCommentValue(evt.target.value);
  };

  const onStarsChange = (evt) => {
    setStarsValue(Number(evt.target.value));
  };

  const nameInputRef = createRef();

  const onClosePopupButtonClick = () => {
    closePopupAction();
  };

  const onBlocklayerClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopupAction();
    }
  };

  const onEscKeydown = useCallback((evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      closePopupAction();
    }
  }, [closePopupAction]);

  useEffect(() => {
    document.addEventListener(`keydown`, onEscKeydown);

    return () => {
      document.removeEventListener(`keydown`, onEscKeydown);
    };
  }, [onEscKeydown]);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <section
      onClick={onBlocklayerClick}
      className="review-form"
    >
      <div className="review-form__popup-wrapper">
        <h2 className="review-form__title">Оставить отзыв</h2>
        <button className="review-form__close-button" type="button" onClick={onClosePopupButtonClick}>
          <svg className="review-form__close-icon">
            <use xlinkHref="#icon-close"></use>
          </svg>
          <span className="visually-hidden">Закрыть окно</span>
        </button>

        <form className="review-form__form" action="#" method="POST">
          <div className="review-form__wrapper">
            <div className="review-form__column-wrapper">
              <div className="review-form__field-wrapper">
                <p className="review-form__error-message">Пожалуйста, заполните поле</p>
                <label htmlFor="review-name" className="review-form__label visually-hidden">Имя</label>
                <input
                  onChange={onNameChange}
                  value={nameValue}
                  ref={nameInputRef}
                  className="review-form__input review-form__input--error"
                  id="review-name" name="review-name"
                  type="text"
                  placeholder="Имя"
                  required
                />
              </div>

              <label htmlFor="review-pros" className="review-form__label visually-hidden">Достоинства</label>
              <input
                onChange={onProsChange}
                value={prosValue}
                className="review-form__input"
                id="review-pros"
                name="review-pros"
                type="text"
                placeholder="Достоинства"
              />

              <label htmlFor="review-cons" className="review-form__label visually-hidden">Недостатки</label>
              <input
                onChange={onConsChange}
                value={consValue}
                className="review-form__input"
                id="review-cons"
                name="review-cons"
                type="text"
                placeholder="Недостатки"
              />
            </div>

            <div className="review-form__column-wrapper">
              <fieldset className="review-form__input-group">
                <div className="review-form__input-group-wrapper">
                  <legend className="review-form__input-group-label">Оцените товар:</legend>

                  {new Array(STARS_COUNT).fill().map((_, index) => (
                    <ReviewFormRatingStar
                      key={`star-input-${index}`}
                      starIndex={index}
                      checked={starsValue === index}
                      onRatingChange={onStarsChange}
                    />
                  ))}
                </div>
              </fieldset>

              <label htmlFor="review-comment" className="review-form__label visually-hidden">Комментарий</label>
              <textarea
                onChange={onCommentChange}
                value={commentValue}
                className="review-form__textarea"
                id="review-comment"
                name="review-comment"
                type="text"
                placeholder="Комментарий"
                required
              >
              </textarea>
            </div>
          </div>

          <button className="review-form__submit-button button button--red" type="submit">Оставить отзыв</button>
        </form>
      </div>
    </section>
  );
};

ReviewForm.propTypes = {
  closePopupAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  closePopupAction() {
    dispatch(closeReviewFormPopup());
  },
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
