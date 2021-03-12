const Reviews = () => {
  return (
    <div className="tabs-reviews reviews">
      <a href="#" className="reviews__submit-review button button--white">оставить отзыв</a>

      <ul className="reviews__list">
        <li className="reviews__item">
          <blockquote className="reviews__quote quote">
            <cite className="quote__author">Борис Иванов</cite>
            <dl className="quote__descriptions">
              <div className="quote__descriptions-row-wrapper quote__descriptions-row-wrapper--pros">
                <dt className="quote__subtitle quote__subtitle">Достоинства</dt>
                <dd className="quote__value quote__value">мощность, внешний вид</dd>
              </div>

              <div className="quote__descriptions-row-wrapper quote__descriptions-row-wrapper--cons">
                <dt className="quote__subtitle quote__subtitle">Недостатки</dt>
                <dd className="quote__value quote__value">Слабые тормозные колодки (пришлось заменить)</dd>
              </div>

              <div className="quote__descriptions-row-wrapper quote__descriptions-row-wrapper--no-icon">
                <dt className="quote__subtitle quote__subtitle--comment">Комментарий</dt>
                <dd className="quote__value quote__value--comment">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</dd>
              </div>
            </dl>

            <div className="quote__rating">
              <ul className="quote__rating-stars">
                <li className="quote__rating-star">
                  <svg className="quote__star-icon quote__star-icon--red">
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
                  <span className="visually-hidden">1 звезда</span>
                </li>
                <li className="quote__rating-star">
                  <svg className="quote__star-icon quote__star-icon--red">
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
                  <span className="visually-hidden">2 звезды</span>
                </li>
                <li className="quote__rating-star quote__rating-star--active">
                  <svg className="quote__star-icon quote__star-icon--red">
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
                  <span className="visually-hidden">3 звезды</span>
                </li>
                <li className="quote__rating-star">
                  <svg className="quote__star-icon quote__star-icon--gray">
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
                  <span className="visually-hidden">4 звезды</span>
                </li>
                <li className="quote__rating-star">
                  <svg className="quote__star-icon quote__star-icon--gray">
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
                  <span className="visually-hidden">5 звезд</span>
                </li>
              </ul>

              <p className="quote__rating-text">Советует</p>
            </div>

            <p className="quote__actions">
              <time className="quote__time" dateTime="2021-03-10T22:23">1 минуту назад</time>
              <a href="#" className="quote__reply">Ответить</a>
            </p>
          </blockquote>
        </li>
        <li className="reviews__item">
          <blockquote className="reviews__quote quote">
            <cite className="quote__author">Марсель Исмагилов</cite>
            <dl className="quote__descriptions">
              <div className="quote__descriptions-row-wrapper quote__descriptions-row-wrapper--pros">
                <dt className="quote__subtitle quote__subtitle--pros">Достоинства</dt>
                <dd className="quote__value quote__value--pros">Cтиль, комфорт, управляемость</dd>
              </div>

              <div className="quote__descriptions-row-wrapper quote__descriptions-row-wrapper--cons">
                <dt className="quote__subtitle quote__subtitle--cons">Недостатки</dt>
                <dd className="quote__value quote__value--cons">Дорогой ремонт и обслуживание</dd>
              </div>

              <div className="quote__descriptions-row-wrapper quote__descriptions-row-wrapper--no-icon">
                <dt className="quote__subtitle quote__subtitle--comment">Комментарий</dt>
                <dd className="quote__value quote__value--comment">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</dd>
              </div>
            </dl>

            <div className="quote__rating">
              <ul className="quote__rating-stars">
                <li className="quote__rating-star">
                  <svg className="quote__star-icon quote__star-icon--red">
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
                  <span className="visually-hidden">1 звезда</span>
                </li>
                <li className="quote__rating-star">
                  <svg className="quote__star-icon quote__star-icon--red">
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
                  <span className="visually-hidden">2 звезды</span>
                </li>
                <li className="quote__rating-star quote__rating-star--active">
                  <svg className="quote__star-icon quote__star-icon--red">
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
                  <span className="visually-hidden">3 звезды</span>
                </li>
                <li className="quote__rating-star">
                  <svg className="quote__star-icon quote__star-icon--gray">
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
                  <span className="visually-hidden">4 звезды</span>
                </li>
                <li className="quote__rating-star">
                  <svg className="quote__star-icon quote__star-icon--gray">
                    <use xlinkHref="#icon-star-small"></use>
                  </svg>
                  <span className="visually-hidden">5 звезд</span>
                </li>
              </ul>

              <p className="quote__rating-text">Советует</p>
            </div>

            <p className="quote__actions">
              <time className="quote__time" dateTime="2021-03-10T22:23">1 минуту назад</time>
              <a href="#" className="quote__reply">Ответить</a>
            </p>
          </blockquote>
        </li>
      </ul>
    </div>
  );
};

export default Reviews;
