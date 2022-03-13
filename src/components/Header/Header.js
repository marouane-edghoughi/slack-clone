import React from 'react';

import { HiOutlineSearch } from 'react-icons/hi';
import { FiHelpCircle } from 'react-icons/fi';

import {
  HeaderContainer,
  HeaderLeft,
  ClockIcon,
  Searchbar,
  HeaderRight
} from './Header.styled';

import Avatar from '../Avatar/Avatar';

function Header() {
  return (
      <HeaderContainer>
        {/* Header Left */}
        <HeaderLeft>
          <Avatar />
          <ClockIcon />
        </HeaderLeft>
        {/* Header Center / Search bar */}
        <Searchbar>
          <HiOutlineSearch />
          <input placeholder='Search' />
        </Searchbar>
        {/* Header Right */}
        <HeaderRight>
          <FiHelpCircle />
        </HeaderRight>
      </HeaderContainer>
  );
}

export default Header;
