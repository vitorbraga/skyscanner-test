import './TopNav.scss';

import React from 'react';
import logo from '../../images/logo.svg';
import menu from '../../images/menu.svg';

const TopNav = () => (
  <header className='header'>
    <div className="header__wrapper">
      <a className="header__wrapper__header-link" href="/">
        <img className='logo' alt="Skyscanner" src={logo}/>
        <span className='logo-text'>Skyscanner</span>
      </a>
      <img className="header__wrapper__img" alt="menu" src={menu} height={24} width={24}/>
    </div>
  </header>
);

export default TopNav;
