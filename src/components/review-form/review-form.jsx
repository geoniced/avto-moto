import {connect} from "react-redux";
import PropTypes from "prop-types";
import React, {createRef, useCallback, useState} from "react";
import {addReview, closeReviewFormPopup} from "../../store/actions";
import ReviewFormRatingStar from "../review-form-rating-star/review-form-rating-star";
import {ReviewField, STARS_COUNT, ValidationMessage} from "../../const";
import {createFieldChangeHandler, getFormattedDate, isInvalidValidation, checkFieldValidity, isEscKeyPressed, isFieldNotEmpty} from "../../utils";
import FormErrorBlock from "../form-error-block/form-error-block";
import {ReactComponent as IconClose} from "../../assets/img/icon-close.svg";
import {useReviewFormOpenLogic} from "../../hooks/use-review-form-open-logic/use-review-form-open-logic";
import {useKeyDown} from "../../hooks/use-key-down/use-key-down";
import {usePreventPageScroll} from "../../hooks/use-prevent-page-scroll/use-prevent-page-scroll";

const clearStorage = (Field) => {
  const fields = Object.values(Field);
  fields.forEach((field) => {
    window.localStorage.removeItem(field);
  });
};

const ReviewForm = (props) => {
  const {closePopupAction, addReviewAction} = props;
  const nameInputRef = createRef();

  const [nameValue, setNameValue] = useState(``);
  const [prosValue, setProsValue] = useState(``);
  const [consValue, setConsValue] = useState(``);
  const [starsValue, setStarsValue] = useState(null);
  const [commentValue, setCommentValue] = useState(``);

  const [formErrors, setFormErrors] = useState({});

  const FieldMap = {
    [ReviewField.NAME]: {value: nameValue, setter: setNameValue},
    [ReviewField.PROS]: {value: prosValue, setter: setProsValue},
    [ReviewField.CONS]: {value: consValue, setter: setConsValue},
    [ReviewField.COMMENT]: {value: commentValue, setter: setCommentValue},
    [ReviewField.STARS]: {value: starsValue, setter: setStarsValue, isNumeric: true},
  };

  const onNameChange = createFieldChangeHandler(ReviewField.NAME, setNameValue);
  const onProsChange = createFieldChangeHandler(ReviewField.PROS, setProsValue);
  const onConsChange = createFieldChangeHandler(ReviewField.CONS, setConsValue);
  const onCommentChange = createFieldChangeHandler(ReviewField.COMMENT, setCommentValue);
  const onStarsChange = createFieldChangeHandler(ReviewField.STARS, setStarsValue, true);

  const onClosePopupButtonClick = () => {
    closePopupAction();
  };

  const onBlocklayerClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopupAction();
    }
  };

  const onReviewSubmitClick = (evt) => {
    evt.preventDefault();

    let isFormValid = true;

    const nameFieldValidity = {
      value: nameValue,
      field: ReviewField.NAME,
      validationFunction: isFieldNotEmpty,
      setter: setFormErrors,
      errorMessage: ValidationMessage.NAME,
    };

    const commentFieldValidity = {
      value: commentValue,
      field: ReviewField.COMMENT,
      validationFunction: isFieldNotEmpty,
      setter: setFormErrors,
      errorMessage: ValidationMessage.COMMENT,
    };

    const validations = [
      checkFieldValidity(nameFieldValidity),
      checkFieldValidity(commentFieldValidity),
    ];

    if (validations.some(isInvalidValidation)) {
      isFormValid = false;
    }

    if (isFormValid) {
      const newReview = {
        userName: nameValue,
        prosText: prosValue,
        consText: consValue,
        commentText: commentValue,
        ratingStars: starsValue,
        dateTime: getFormattedDate(),
      };

      clearStorage(ReviewField);
      addReviewAction(newReview);
      closePopupAction();
    }
  };

  const onEscKeydown = useCallback((evt) => {
    if (isEscKeyPressed(evt)) {
      closePopupAction();
    }
  }, [closePopupAction]);

  usePreventPageScroll();
  useKeyDown(onEscKeydown);
  useReviewFormOpenLogic(nameInputRef, FieldMap);

  return (
    <section
      onClick={onBlocklayerClick}
      className="review-form"
    >
      <div className="review-form__popup-wrapper">
        <h2 className="review-form__title">Оставить отзыв</h2>
        <button className="review-form__close-button" type="button" onClick={onClosePopupButtonClick}>
          <IconClose className="review-form__close-icon" />
          <span className="visually-hidden">Закрыть окно</span>
        </button>

        <form className="review-form__form" action="#" method="POST">
          <div className="review-form__wrapper">
            <div className="review-form__column-wrapper">
              <div className="review-form__field-wrapper">
                <FormErrorBlock
                  errorMessage={formErrors[ReviewField.NAME]}
                />
                <label htmlFor="review-name" className="review-form__label visually-hidden">Имя</label>
                <input
                  onChange={onNameChange}
                  value={nameValue}
                  ref={nameInputRef}
                  className={`review-form__input ${formErrors[ReviewField.NAME] ? `review-form__input--error` : ``}`}
                  id="review-name" name="review-name"
                  type="text"
                  placeholder="Имя"
                  required
                />
              </div>

              <div className="review-form__field-wrapper">
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
              </div>

              <div className="review-form__field-wrapper">
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
            </div>

            <div className="review-form__column-wrapper">
              <fieldset className="review-form__input-group">
                <div className="review-form__input-group-wrapper">
                  <legend className="review-form__input-group-label">Оцените товар:</legend>

                  {new Array(STARS_COUNT).fill(``).map((_, index) => {
                    const currentStarIndex = index + 1;

                    return (
                      <ReviewFormRatingStar
                        key={`star-input-${currentStarIndex}`}
                        starIndex={currentStarIndex}
                        checked={starsValue === currentStarIndex}
                        chosenStarIndex={starsValue}
                        onRatingChange={onStarsChange}
                      />
                    );
                  })}
                </div>
              </fieldset>

              <div className="review-form__field-wrapper">
                <FormErrorBlock
                  errorMessage={formErrors[ReviewField.COMMENT]}
                />
                <label htmlFor="review-comment" className="review-form__label visually-hidden">Комментарий</label>
                <textarea
                  onChange={onCommentChange}
                  value={commentValue}
                  className={`review-form__textarea ${formErrors[ReviewField.COMMENT] ? `review-form__textarea--error` : ``}`}
                  id="review-comment"
                  name="review-comment"
                  placeholder="Комментарий"
                  required
                />
              </div>
            </div>
          </div>

          <button
            onClick={onReviewSubmitClick}
            className="review-form__submit-button button button--red"
            type="submit"
          >
            Оставить отзыв
          </button>
        </form>
      </div>
    </section>
  );
};

ReviewForm.propTypes = {
  closePopupAction: PropTypes.func.isRequired,
  addReviewAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  closePopupAction() {
    dispatch(closeReviewFormPopup());
  },
  addReviewAction(review) {
    dispatch(addReview(review));
  }
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
