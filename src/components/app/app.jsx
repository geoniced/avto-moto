import React from "react";
import CardDescription from "../card-description/card-description";
import ReviewForm from "../review-form/review-form";
import {getIsReviewFormPopupOpened} from "../../store/selectors";
import {connect} from "react-redux";

const CardDescriptionMemo = React.memo(CardDescription);

const App = (props) => {
  const {isReviewFormPopupOpened} = props;

  return (
    <>
      <h1 className="visually-hidden">Карточка автомобиля Марпех 11</h1>

      <CardDescriptionMemo />
      {isReviewFormPopupOpened && <ReviewForm />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isReviewFormPopupOpened: getIsReviewFormPopupOpened(state),
});

export default connect(mapStateToProps)(App);
