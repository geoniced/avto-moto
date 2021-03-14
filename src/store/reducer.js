import {extend} from "../utils";
import {ActionType} from "./actions";
import {REVIEWS} from "../const";

const initialState = {
  isReviewFormPopupOpened: false,
  reviews: REVIEWS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_REVIEW_FORM_POPUP:
      return extend(state, {
        isReviewFormPopupOpened: true,
      });

    case ActionType.CLOSE_REVIEW_FORM_POPUP:
      return extend(state, {
        isReviewFormPopupOpened: false,
      });

    case ActionType.ADD_REVIEW:
      const newReviews = state.reviews.slice();
      newReviews.push(action.payload);

      return extend(state, {
        reviews: newReviews,
      });
  }
  return state;
};

export {reducer};
