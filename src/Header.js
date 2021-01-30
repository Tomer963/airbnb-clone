import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

import AirbnbLogo from './assets/Airbnb-Logo.svg';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={AirbnbLogo} alt='Airbnb Logo' className='header__logo' />

      <div className='header__center'>
        <input type='text' />
        <SearchIcon />
      </div>

      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
