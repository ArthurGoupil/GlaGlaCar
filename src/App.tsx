import React from 'react';

import './styles/reset.css';
import './styles/index.css';
import { headerHeight } from './styles/StylingConstants';

import styled from 'styled-components';

import Header from './components/Header';
import MainForm from './components/MainForm';

const App: React.FC = () => {
  return (
    <Root>
      <Header />
      <Main>
        <MainForm />
      </Main>
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

const Main = styled.main`
  width: 100%;
  height: calc(100vh - ${headerHeight});
`;
