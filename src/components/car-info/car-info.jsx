import React from "react";

const CarInfo = () => {
  return (
    <div className="card-description__car-info car-info">
      <h2 className="car-info__title">Марпех 11</h2>

      <ul className="car-info__features">
        <li className="car-info__features-item car-info__features-item--gas">бензин</li>
        <li className="car-info__features-item car-info__features-item--transmission">механика</li>
        <li className="car-info__features-item car-info__features-item--horse-power">100 л.с.</li>
        <li className="car-info__features-item car-info__features-item--engine-volume">1.4 л</li>
      </ul>

      <p className="car-info__price">
        2 300 000 ₽ <s className="car-info__prev-price">2 &nbsp;400 000 ₽</s>
      </p>

      <div className="car-info__buttons-wrapper">
        <a href="#" className="car-info__order button button--red">Оставить заявку</a>
        <a href="#" className="car-info__credit button button--white">В кредит от 11 000 ₽</a>
      </div>
    </div>
  );
};

export default CarInfo;
