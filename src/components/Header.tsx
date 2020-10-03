import React from 'react';
import { Link } from 'react-router-dom';

import {
  headerWidth,
  headerHeight,
  miniShadow,
} from '../styles/StylingConstants';

import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer className='d-flex justify-center align-center'>
      <StyledHeader className='d-flex space-between align-center'>
        <Link to='/'>
          <Logo src='/glaglacar-logo.png' alt='Logo GlaGlaCar' />
        </Link>
        <h1>The one and only service of sledpooling</h1>
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: ${headerHeight};
  background-color: white;
  box-shadow: ${miniShadow};
  padding: 0 40px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StyledHeader = styled.header`
  width: 100%;
  max-width: ${headerWidth};
`;

const Logo = styled.img`
  height: 40px;
`;
