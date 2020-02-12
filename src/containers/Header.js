import React from 'react';
import Menu from './Menu';
import MenuItem from '../components/MenuItem';

const Header = () => {
  return (
    <header className="flex flex-row items-end">
      <div className="flex">
        <div className="bk-logo flex flex-col justify-end">
          <MenuItem link="/" name="Menu" image="logo.png" />
        </div>
        <Menu />
      </div>
    </header>
  );
}

export default Header;