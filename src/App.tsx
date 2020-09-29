import React from 'react';

import './styles/reset.css';
import './styles/index.css';

import styled from 'styled-components';

const App = (): JSX.Element => {
  return (
    <Root>
      <Header className='d-flex justify-center align-center'>
        <Logo src='/glaglacar-logo.png' alt='Logo GlaGlaCar' />
      </Header>
    </Root>
  );
};

export default App;

const Root = styled.div`
  background-image: url('/glaglacar-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header.attrs((props: { className: string }) => ({
  className: props.className,
}))`
  height: 80px;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img.attrs((props: { src: string; alt: string }) => ({
  src: props.src,
  alt: props.alt,
}))`
  height: 50px;
`;
