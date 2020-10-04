import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <div>
        <p className="menu__logo">Логотип</p>
        <NavLink to='/profile' className="menu__item" activeClassName="menu__item_active">
          <img src={require("../images/heart.png")} alt="heart" />
          <p>Профиль</p>
        </NavLink>
        <NavLink to="/doctors" className="menu__item" activeClassName="menu__item_active">
          <img src={require("../images/vector.png")} alt="doctors" />
          <p>Врачи и клиники</p>
        </NavLink>
        <NavLink to="/messages" className="menu__item" activeClassName="menu__item_active">
          <img src={require("../images/speak.png")} alt="message" />
          <p>Сообщения</p>
        </NavLink>
        <NavLink to="/test" className="menu__item" activeClassName="menu__item_active">
          <img src={require("../images/test.png")} alt="test" />
          <p>Тестирование</p>
        </NavLink>
        <NavLink to="/knowledge" className="menu__item" activeClassName="menu__item_active">
          <img src={require("../images/book.png")} alt="book" />
          <p>Полезно знать</p>
        </NavLink>
        <p className="menu__button">Подать заявку</p>
      </div>

      <div>
        <NavLink to="/support" className="menu__item menu__help" activeClassName="menu__item_active">
          <img src={require('../images/help.png')} alt="help" />
          <p>Помощь</p>
        </NavLink>
        <a href="https://appvelox.ru/">
          <img src={require('../images/logo.png')} alt="logo" />
        </a>
      </div>
    </div>
  );
}

export default Menu;
