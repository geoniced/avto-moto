import {extend} from "../utils";
import {ActionType} from "./actions";

const initialState = {
  isReviewFormPopupOpened: false,
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
  }
  return state;
};

export {reducer};
