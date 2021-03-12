import CardDescription from "../card-description/card-description";
import ReviewForm from "../review-form/review-form"

const App = () => {
  return (
    <>
      <h1 className="visually-hidden">Карточка автомобиля Марпех 11</h1>

      <CardDescription />
      <ReviewForm />
    </>
  );
}

export default App;
