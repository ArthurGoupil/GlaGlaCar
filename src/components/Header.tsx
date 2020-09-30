import React from 'react';

import { headerHeight } from '../styles/StylingConstants';

import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <StyledHeader className='d-flex justify-center align-center'>
      <Logo src='/glaglacar-logo.png' alt='Logo GlaGlaCar' />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header.attrs((props: { className: string }) => ({
  className: props.className,
}))`
  height: ${headerHeight};
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img.attrs((props: { src: string; alt: string }) => ({
  src: props.src,
  alt: props.alt,
}))`
  height: 50px;
`;
