import React from 'react';

import styled from 'styled-components';

import { mainLightColor } from '../../../styles/StylingConstants';
import { ISledDisplayProps } from '../../../types/SledpoolsSearchTypes';

const SledDisplay = ({
  dogs,
  seats,
  availableSeats,
}: ISledDisplayProps): JSX.Element => {
  const dogsDisplay: undefined[] = [];
  dogsDisplay.length = dogs;

  return (
    <div className='d-flex align-end'>
      {[...Array(dogs - 1)].map((dog, index) => {
        return (
          <SledDogSVG
            key={`dog-${index}`}
            src='/sleddog.svg'
            alt={`dog-${index}`}
          />
        );
      })}
      <SledSVG src='/sled.svg' />
      {[...Array(seats - availableSeats)].map((seat, index) => {
        return (
          <TakenSeatSVG
            key={`taken-seat-${index}`}
            src='/takenseat.svg'
            alt={`taken-seat-${index}`}
          />
        );
      })}
      {[...Array(availableSeats)].map((seat, index) => {
        return (
          <AvailableSeatSVG
            key={`available-seat-${index}`}
            src='/availableseat.svg'
            alt={`available-seat-${index}`}
          />
        );
      })}
    </div>
  );
};

const SledSVG = styled.img`
  width: 85px;
`;

const SledDogSVG = styled.img`
  width: 35px;
  margin-right: -9px;
`;

const TakenSeatSVG = styled.img`
  width: 17px;
  border-bottom: 2px solid ${mainLightColor};
  margin-bottom: 2px;
  padding-bottom: 1px;
`;

const AvailableSeatSVG = styled.img`
  width: 18px;
  border-bottom: 2px solid ${mainLightColor};
  margin-bottom: 2px;
  padding-bottom: 1px;
`;

export default SledDisplay;
