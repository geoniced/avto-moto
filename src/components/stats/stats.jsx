import React from "react";

const Stats = () => {
  return (
    <dl className="tabs__stats stats">
      <div className="stats__row-wrapper">
        <dt className="stats__title">Трансмиссия</dt>
        <dd className="stats__value">Роботизированная</dd>
      </div>

      <div className="stats__row-wrapper">
        <dt className="stats__title">Мощность двигателя, л.с.</dt>
        <dd className="stats__value">249</dd>
      </div>

      <div className="stats__row-wrapper">
        <dt className="stats__title">Тип двигателя</dt>
        <dd className="stats__value">Бензиновый</dd>
      </div>

      <div className="stats__row-wrapper">
        <dt className="stats__title">Привод</dt>
        <dd className="stats__value">Полный</dd>
      </div>

      <div className="stats__row-wrapper">
        <dt className="stats__title">Объем двигателя, л</dt>
        <dd className="stats__value">2.4</dd>
      </div>

      <div className="stats__row-wrapper">
        <dt className="stats__title">Макс. крутящий момент</dt>
        <dd className="stats__value">370/4500</dd>
      </div>

      <div className="stats__row-wrapper">
        <dt className="stats__title">Количество цилиндров</dt>
        <dd className="stats__value">4</dd>
      </div>
    </dl>
  );
};

export default Stats;
