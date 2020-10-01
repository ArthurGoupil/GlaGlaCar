import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/reset.css';
import './styles/index.css';
import { mainContainerWidth, headerHeight } from './styles/StylingConstants';

import styled from 'styled-components';

import Header from './components/Header';
import Home from './pages/Home';
import SledPoolsSearch from './pages/SledPoolsSearch';

const App: React.FC = () => {
  return (
    <Router>
      <Root className='d-flex flex-column align-center'>
        <Header />
        <Main>
          <Switch>
            <Route path='/sledpoolssearch/:departure/:arrival/:date/:numberOfPassenger'>
              <SledPoolsSearch />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Main>
      </Root>
    </Router>
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
  max-width: ${mainContainerWidth};
  height: calc(100vh - ${headerHeight});
`;
