import React, {useState} from "react";
import {IMAGES} from "../../const";
import {ReactComponent as IconSliderArrow} from "../../assets/img/icon-slider-arrow.svg";

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
          {IMAGES.map((image, i) => (
            <li key={`preview-${i}`} className="gallery__item">
              <img className="gallery__preview" src={image.preview} alt={`Превью изображения ${i}`} width="128" height="80" />
            </li>
          ))}
        </ul>
        <button
          onClick={onPrevButtonClick}
          disabled={currentImage === FIRST_IMAGE}
          className="slider__button slider__button--prev"
          type="button"
        >
          <IconSliderArrow className="slider__icon-arrow" />
          <span className="visually-hidden">Предыдущая фотография</span>
        </button>

        <button
          onClick={onNextButtonClick}
          disabled={currentImage === LAST_IMAGE}
          className="slider__button slider__button--next"
          type="button"
        >
          <IconSliderArrow className="slider__icon-arrow" />
          <span className="visually-hidden">Следующая фотография</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
