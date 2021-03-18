import React from "react";
import logo from "../../assets/img/logo.svg";

const MainHeader = () => {
  return (
    <header className="main-header">
      <nav className="main-header__nav">
        <a className="main-header__logo logo">
          <img className="logo__image" src={logo} alt="Логотип Сайта Avto Moto" width="134" height="55" />
        </a>

        <ul className="main-header__site-navigation site-navigation">
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Автомобили</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Контакты</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Услуги</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Вакансии</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
