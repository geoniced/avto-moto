export const ActionType = {
  OPEN_REVIEW_FORM_POPUP: `OPEN_REVIEW_FORM_POPUP`,
  CLOSE_REVIEW_FORM_POPUP: `CLOSE_REVIEW_FORM_POPUP`,
};

export const openReviewFormPopup = () => ({
  type: ActionType.OPEN_REVIEW_FORM_POPUP,
});

export const closeReviewFormPopup = () => ({
  type: ActionType.CLOSE_REVIEW_FORM_POPUP,
});
