import React from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { normalSpace } from '../styles/StylingConstants';
import SearchRecap from '../components/SledPoolsSearch/SearchRecap';
import SearchResults from '../components/SledPoolsSearch/SearchResults';

const SledPoolsSearch: React.FC = () => {
  const {
    departure,
    arrival,
    date,
    numberOfPassenger,
  }: { [key: string]: string } = useParams();

  const numberOfPassengerToNum = Number(numberOfPassenger);

  return (
    <SearchContainer className='d-flex flex-column align-center'>
      <SearchRecap
        departure={departure}
        arrival={arrival}
        date={new Date(date)}
        numberOfPassenger={numberOfPassengerToNum}
      />
      <SearchResults
        departure={departure}
        arrival={arrival}
        date={new Date(date)}
        numberOfPassenger={numberOfPassengerToNum}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.section`
  margin-top: ${normalSpace};
`;

export default SledPoolsSearch;
