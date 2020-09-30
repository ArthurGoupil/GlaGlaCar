import React from 'react';

import { headerWidth, headerHeight } from '../styles/StylingConstants';

import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer className='d-flex justify-center align-center'>
      <StyledHeader className='d-flex space-between align-center'>
        <Logo src='/glaglacar-logo.png' alt='Logo GlaGlaCar' />
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
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 0 40px;
`;

const StyledHeader = styled.header`
  width: 100%;
  max-width: ${headerWidth};
`;

const Logo = styled.img`
  height: 40px;
`;
