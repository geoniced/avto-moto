export const ActionType = {
  OPEN_REVIEW_FORM_POPUP: `OPEN_REVIEW_FORM_POPUP`,
  CLOSE_REVIEW_FORM_POPUP: `CLOSE_REVIEW_FORM_POPUP`,
  ADD_REVIEW: `ADD_REVIEW`,
};

export const openReviewFormPopup = () => ({
  type: ActionType.OPEN_REVIEW_FORM_POPUP,
});

export const closeReviewFormPopup = () => ({
  type: ActionType.CLOSE_REVIEW_FORM_POPUP,
});

export const addReview = (review) => ({
  type: ActionType.ADD_REVIEW,
  payload: review,
});
