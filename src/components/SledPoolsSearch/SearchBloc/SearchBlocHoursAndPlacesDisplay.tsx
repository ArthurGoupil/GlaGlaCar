import React from 'react';

import styled from 'styled-components';

import { mainColor } from '../../../styles/StylingConstants';
import { IHoursAndPlacesProps } from '../../../types/SledPoolsSearchTypes';

const SearchBlocHoursAndPlacesDisplay = ({
  departure,
  arrival,
  departureTime,
  arrivalTime,
}: IHoursAndPlacesProps): JSX.Element => {
  return (
    <Container className='d-flex flex-column space-between'>
      <span className='d-flex align-center'>
        {departureTime} <Circle /> {departure}
      </span>
      <HorizontalBar />
      <span className='d-flex align-center'>
        {arrivalTime} <Circle /> {arrival}
      </span>
    </Container>
  );
};

const Container = styled.span`
  font-weight: bold;
  height: 100px;
`;

const Circle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  border: 3px solid ${mainColor};
  margin: 0 10px 0 10px;
`;

const HorizontalBar = styled.span`
  width: 5px;
  height: 65px;
  position: absolute;
  left: 90px;
  top: 37px;
  border-radius: 10px;
  background-color: ${mainColor};
`;

export default SearchBlocHoursAndPlacesDisplay;
