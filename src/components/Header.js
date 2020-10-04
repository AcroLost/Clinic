import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <p>Мой профиль</p>
      <div className="header__services">
        <img src={require('../images/search.png')} alt="search" />
        <img src={require('../images/bell.png')} alt="bell" />
        <img src={require('../images/eye.png')} alt="eye" />
        <img className="header__user" src={require('../images/user.png')} alt="user_photo" />
        <img src={require('../images/arrow_down.png')} alt="arrow" />
      </div>
    </div>
  );
}

export default Header;
