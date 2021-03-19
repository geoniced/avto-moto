import PropTypes from "prop-types";
import carImgBig1 from "./assets/img/car-image-big-1.jpg";
import carImgBig2 from "./assets/img/car-image-big-2.jpg";
import carImgBig3 from "./assets/img/car-image-big-3.jpg";
import carImg1 from "./assets/img/car-image-1.jpg";
import carImg2 from "./assets/img/car-image-2.jpg";
import carImg3 from "./assets/img/car-image-3.jpg";
import {getFormattedDate} from "./utils";

export const IMAGES = [
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

export const Tab = {
  STATS: `STATS`,
  REVIEWS: `REVIEWS`,
  CONTACTS: `CONTACTS`,
};

export const ReviewField = {
  NAME: `review-name`,
  PROS: `review-pros`,
  CONS: `review-cons`,
  COMMENT: `review-comment`,
  STARS: `review-stars`,
};

export const STARS_COUNT = 5;

export const REVIEWS = [
  {
    userName: `Борис Иванов`,
    prosText: `мощность, внешний вид`,
    consText: `Слабые тормозные колодки (пришлось заменить)`,
    commentText: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
    ratingStars: 3,
    conclusionText: `Советует`,
    dateTime: getFormattedDate(`2021-03-14 18:45`),
  },
  {
    userName: `Марсель Исмагилов`,
    prosText: `Cтиль, комфорт, управляемость`,
    consText: `Дорогой ремонт и обслуживание`,
    commentText: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
    ratingStars: 3,
    conclusionText: `Советует`,
    dateTime: getFormattedDate(`2021-03-14 18:30`),
  },
];

export const ValidationMessage = {
  NAME: `Пожалуйста, заполните поле`,
  COMMENT: `Пожалуйста, заполните поле`,
};

export const Rating = {
  DO_NOT_RECOMMEND: `Не советую`,
  RECOMMEND: `Советую`,
};

export const propTypesNumberOrNullRequired = PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.oneOf([null]).isRequired]);
