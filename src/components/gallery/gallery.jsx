import {useState} from "react";
import carImgBig1 from "../../assets/img/car-image-big-1.jpg";
import carImgBig2 from "../../assets/img/car-image-big-2.jpg";
import carImgBig3 from "../../assets/img/car-image-big-3.jpg";
import carImg1 from "../../assets/img/car-image-1.jpg";
import carImg2 from "../../assets/img/car-image-2.jpg";
import carImg3 from "../../assets/img/car-image-3.jpg";

const IMAGES = [
  {
    preview: carImg1,
    big: carImgBig1,
  },
  {
    preview: carImg2,
    big: carImgBig2,
  },
  {
    preview: carImg3,
    big: carImgBig3,
  },
];

const FIRST_IMAGE = 0;
const LAST_IMAGE = IMAGES.length - 1;

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const onPrevButtonClick = () => {
    setCurrentImage((prevState) => prevState - 1);
  };

  const onNextButtonClick = () => {
    setCurrentImage((prevState) => prevState + 1);
  };

  return (
    <div className="card-description__gallery gallery">
      <div className="gallery__big-image-wrapper">
        <img className="gallery__big-image" src={IMAGES[currentImage].big} alt="Большое изображение 1" width="600" height="375" />
        <p className="gallery__new-model-text">new model</p>
      </div>

      <div className="gallery__slider slider">
        <ul className="gallery__list slider__photos">
          <li className="gallery__item">
            <img className="gallery__preview" src={carImg1} alt="Превью изображения 1" width="128" height="80" />
          </li>
          <li className="gallery__item">
            <img className="gallery__preview" src={carImg2} alt="Превью изображения 2" width="128" height="80" />
          </li>
          <li className="gallery__item">
            <img className="gallery__preview" src={carImg3} alt="Превью изображения 3" width="128" height="80" />
          </li>
        </ul>
        <button
          onClick={onPrevButtonClick}
          disabled={currentImage === FIRST_IMAGE}
          className="slider__button slider__button--prev"
          type="button"
        >
          <svg className="slider__icon-arrow">
            <use xlinkHref="#icon-slider-arrow"></use>
          </svg>
          <span className="visually-hidden">Предыдущая фотография</span>
        </button>

        <button
          onClick={onNextButtonClick}
          disabled={currentImage === LAST_IMAGE}
          className="slider__button slider__button--next"
          type="button"
        >
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
