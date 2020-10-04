import React from 'react';

import styled from 'styled-components';

import {
  mainLightColor,
  mobileBreakPoint,
  tabletBreakPoint,
} from '../../../styles/StylingConstants';
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

  @media (max-width: ${tabletBreakPoint}) {
    width: 60px;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 40px;
  }
`;

const SledDogSVG = styled.img`
  width: 35px;
  margin-right: -9px;

  @media (max-width: ${tabletBreakPoint}) {
    width: 25px;
    margin-right: -5px;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 17px;
    margin-right: -4px;
  }
`;

const TakenSeatSVG = styled.img`
  width: 17px;
  border-bottom: 2px solid ${mainLightColor};
  margin-bottom: 2px;
  padding-bottom: 1px;

  @media (max-width: ${tabletBreakPoint}) {
    width: 13px;
    margin-bottom: 1px;
    padding-bottom: 0px;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 8px;
    margin-bottom: 1px;
    padding-bottom: 0px;
    border-width: 1px;
  }
`;

const AvailableSeatSVG = styled.img`
  width: 18px;
  border-bottom: 2px solid ${mainLightColor};
  margin-bottom: 2px;
  padding-bottom: 1px;

  @media (max-width: ${tabletBreakPoint}) {
    width: 14px;
    margin-bottom: 1px;
    padding-bottom: 0px;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 8px;
    margin-bottom: 1px;
    padding-bottom: 0px;
    border-width: 1px;
  }
`;

export default SledDisplay;
