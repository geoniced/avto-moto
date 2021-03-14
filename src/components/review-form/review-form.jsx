import {connect} from "react-redux";
import PropTypes from "prop-types";
import {closeReviewFormPopup} from "../../store/actions";
import {createRef, useCallback, useEffect, useState} from "react";

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
    setStarsValue(evt.target.value);
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

                  <input className="review-form__rating-star visually-hidden" id="review-star-1" name="review-star" type="radio" value="1" />
                  <label htmlFor="review-star-1" className="review-form__rating-star-label">
                    <svg className="review-form__star-icon">
                      <use xlinkHref="#icon-star-big"></use>
                    </svg>
                    <span className="visually-hidden">1 звезда</span>
                  </label>

                  <input className="review-form__rating-star visually-hidden" id="review-star-2" name="review-star" type="radio" value="2" />
                  <label htmlFor="review-star-2" className="review-form__rating-star-label">
                    <svg className="review-form__star-icon">
                      <use xlinkHref="#icon-star-big"></use>
                    </svg>
                    <span className="visually-hidden">2 звезды</span>
                  </label>

                  <input className="review-form__rating-star visually-hidden" id="review-star-3" name="review-star" type="radio" value="3" />
                  <label htmlFor="review-star-3" className="review-form__rating-star-label">
                    <svg className="review-form__star-icon">
                      <use xlinkHref="#icon-star-big"></use>
                    </svg>
                    <span className="visually-hidden">3 звезды</span>
                  </label>

                  <input className="review-form__rating-star visually-hidden" id="review-star-4" name="review-star" type="radio" value="4" />
                  <label htmlFor="review-star-4" className="review-form__rating-star-label">
                    <svg className="review-form__star-icon">
                      <use xlinkHref="#icon-star-big"></use>
                    </svg>
                    <span className="visually-hidden">4 звезды</span>
                  </label>

                  <input className="review-form__rating-star visually-hidden" id="review-star-5" name="review-star" type="radio" value="5" />
                  <label htmlFor="review-star-5" className="review-form__rating-star-label">
                    <svg className="review-form__star-icon">
                      <use xlinkHref="#icon-star-big"></use>
                    </svg>
                    <span className="visually-hidden">5 звезд</span>
                  </label>
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
