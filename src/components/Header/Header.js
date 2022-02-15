import React from 'react';

import { HiOutlineSearch } from 'react-icons/hi';
import { FiHelpCircle } from 'react-icons/fi';

import {
  HeaderContainer,
  HeaderLeft,
  Avatar,
  ClockIcon,
  Searchbar,
  HeaderRight
} from './Header.styled';

function Header() {
  return (
      <HeaderContainer>
        {/* Header Left */}
        <HeaderLeft>
          <Avatar>
            {/* // TODO: Add onClick */}
            M
          </Avatar>
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
