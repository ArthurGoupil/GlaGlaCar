import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/reset.css';
import './styles/index.css';
import { mainContainerWidth } from './styles/StylingConstants';

import styled from 'styled-components';

import Header from './components/Header';
import Home from './pages/Home';
import SledpoolsSearch from './pages/SledpoolsSearch';

const App: React.FC = () => {
  return (
    <Router>
      <Root className='d-flex flex-column align-center'>
        <Header />
        <Main>
          <Switch>
            <Route path='/sledpoolssearch/:departure/:arrival/:date/:numberOfPassenger'>
              <SledpoolsSearch />
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
  min-width: ${document.documentElement
    .clientWidth}; /* getting 100vh - scrollbar width */
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  max-width: ${mainContainerWidth};
`;
