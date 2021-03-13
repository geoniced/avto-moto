import Contacts from "../contacts/contacts";
import Reviews from "../reviews/reviews";
import Stats from "../stats/stats";

const Tabs = () => {
  return (
    <div className="card-description__tabs tabs">
      <ul className="tabs__list">
        <li className="tabs__item tabs__item--active">
          <button type="button" className="tabs__button">Характеристики</button>
        </li>
        <li className="tabs__item">
          <button type="button" className="tabs__button">Отзывы</button>
        </li>
        <li className="tabs__item">
          <button type="button" className="tabs__button">Контакты</button>
        </li>
      </ul>

      <Stats />
      <Reviews />
      <Contacts />
    </div>
  );
};

export default Tabs;
