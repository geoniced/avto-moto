import React, {useState} from "react";
import logo from "../../assets/img/logo.svg";

const MainHeader = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const onMenuButtonClick = () => {
    setIsMenuOpened((prevState) => !prevState);
  };

  return (
    <header className="main-header">
      <nav className="main-header__nav">
        <a className="main-header__logo logo">
          <img className="logo__image" src={logo} alt="Логотип Сайта Avto Moto" width="134" height="55" />
        </a>

        <div className={`main-header__menu-wrapper ${isMenuOpened ? `main-header__menu-wrapper--opened` : ``}`}>
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
        </div>

        <button
          onClick={onMenuButtonClick}
          className="main-header__menu">
          <span className="visually-hidden">Открыть меню</span>
        </button>
      </nav>
    </header>
  );
};

export default MainHeader;
