import React from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import {
  smallSpace,
  normalSpace,
  mobileBreakPoint,
  tabletBreakPoint,
} from '../styles/StylingConstants';
import SearchRecap from '../components/SledpoolsSearch/SearchRecap';
import SearchResults from '../components/SledpoolsSearch/SearchResults';

const SledpoolsSearch: React.FC = () => {
  const {
    departure,
    arrival,
    date,
    numberOfPassenger,
  }: { [key: string]: string } = useParams();

  console.log(new Date(date.replace(/-/g, '/')));

  const numberOfPassengerToNum = Number(numberOfPassenger);

  return (
    <SearchContainer className='d-flex flex-column align-center'>
      <SearchRecap
        departure={departure}
        arrival={arrival}
        date={new Date(date.replace(/-/g, '/'))}
        numberOfPassenger={numberOfPassengerToNum}
      />
      <SearchResults
        departure={departure}
        arrival={arrival}
        date={new Date(date.replace(/-/g, '/'))}
        numberOfPassenger={numberOfPassengerToNum}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.section`
  width: 70%;
  margin: ${normalSpace} 0;

  @media (max-width: ${tabletBreakPoint}) {
    width: 100%;
  }
  @media (max-width: ${mobileBreakPoint}) {
    margin: ${smallSpace} 0;
  }
`;

export default SledpoolsSearch;
