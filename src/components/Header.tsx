import React from 'react';
import { Link } from 'react-router-dom';

import {
  headerWidth,
  headerHeight,
  miniShadow,
  homeFormBreakPoint,
} from '../styles/StylingConstants';

import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer className='d-flex justify-center align-center'>
      <StyledHeader className='d-flex space-between align-center'>
        <Link to='/'>
          <Logo src='/glaglacar-logo.png' alt='Logo GlaGlaCar' />
        </Link>
        <BaseLine>The one and only service of sledpooling</BaseLine>
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

  @media (max-width: ${homeFormBreakPoint}) {
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const BaseLine = styled.h1`
  @media (max-width: ${homeFormBreakPoint}) {
    display: none;
  }
`;
