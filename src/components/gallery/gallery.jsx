const Gallery = () => {
  return (
    <div className="card-description__gallery gallery">
      <div className="gallery__big-image-wrapper">
        <img className="gallery__big-image" src="img/car-image-big-1.jpg" alt="Большое изображение 1" width="600" height="375" />
        <p className="gallery__new-model-text">new model</p>
      </div>

      <div className="gallery__slider slider">
        <ul className="gallery__list slider__photos">
          <li className="gallery__item">
            <img className="gallery__preview" src="img/car-image-1.jpg" alt="Превью изображения 1" width="128" height="80" />
          </li>
          <li className="gallery__item">
            <img className="gallery__preview" src="img/car-image-2.jpg" alt="Превью изображения 2" width="128" height="80" />
          </li>
          <li className="gallery__item">
            <img className="gallery__preview" src="img/car-image-3.jpg" alt="Превью изображения 3" width="128" height="80" />
          </li>
        </ul>
        <button className="slider__button slider__button--prev slider__button--disabled" type="button">
          <svg className="slider__icon-arrow">
            <use xlinkHref="#icon-slider-arrow"></use>
          </svg>
          <span className="visually-hidden">Предыдущая фотография</span>
        </button>
        <button className="slider__button slider__button--next" type="button">
          <svg className="slider__icon-arrow">
            <use xlinkHref="#icon-slider-arrow"></use>
          </svg>
          <span className="visually-hidden">Следующая фотография</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
