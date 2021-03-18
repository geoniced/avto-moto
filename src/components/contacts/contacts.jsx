import React from "react";
import mapImg from "../../assets/img/map.jpg";

const Contacts = () => {
  return (
    <div className="tabs__contacts contacts">
      <dl className="contacts__info">
        <dt className="contacts__title contacts__title--address">Адрес</dt>
        <dd className="contacts__value contacts__value--address">Санкт-Петербург,<br />набережная реки Карповки, дом 5</dd>

        <dt className="contacts__title">Режим работы</dt>
        <dd className="contacts__value">Ежедневно, с 10:00 до 21:00</dd>

        <dt className="contacts__title">Телефон</dt>
        <dd className="contacts__value">
          <a href="tel:88003335599" className="contacts__phone-link">8 (800) 333-55-99</a>
        </dd>

        <dt className="contacts__title">E-mail</dt>
        <dd className="contacts__value">
          <a href="mailto:info@avto-moto.ru" className="contacts__email-link">info@avto-moto.ru</a>
        </dd>
      </dl>

      <div className="contacts__map-column">
        <img className="contacts__map-image" src={mapImg} alt="Карта магазина по адресу Санкт-Петербург, набережная реки Карповки, дом 5" width="431" height="271" />
        <iframe className="contacts__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.2004855504447!2d30.31550965736594!3d59.967201460191774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1615536784566!5m2!1sru!2sru" width="431" height="271" allowFullScreen="" loading="lazy" aria-hidden="false" tabIndex="0"></iframe>
      </div>
    </div>
  );
};

export default Contacts;
