import './TopNav.scss';

import React from 'react';
import logo from '../../images/logo.svg';
import menu from '../../images/menu.svg';

const TopNav = () => (
  <header className='header'>
    <a className="header__header-link" href="/">
      <img className='logo' alt="Skyscanner" src={logo}/>
      <span className='logo-text'>Skyscanner</span>
    </a>
    <img alt="menu" src={menu} height={24} width={24}/>
  </header>
);

export default TopNav;
