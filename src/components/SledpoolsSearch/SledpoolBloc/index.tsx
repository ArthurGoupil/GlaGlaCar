import React from 'react';

import styled from 'styled-components';

import {
  radius,
  smallSpace,
  normalSpace,
  shadow,
  mainLightColorShadow,
  tabletBreakPoint,
} from '../../../styles/StylingConstants';
import { ISledpoolBlocProps } from '../../../types/SledpoolsSearchTypes';
import SledDisplay from './SledDisplay';
import SledpoolBlocHoursAndPlacesDisplay from './SledpoolBlocHoursAndPlacesDisplay';
import ProfileDisplay from './ProfileDisplay';

const SledpoolBloc = ({
  departure,
  departureHour,
  arrival,
  arrivalHour,
  date,
  price,
  seats,
  availableSeats,
  dogs,
  user,
  hasNoMarginBottom,
}: ISledpoolBlocProps): JSX.Element => {
  return (
    <SledpoolBlocContainer
      className='d-flex flex-column space-between'
      hasNoMarginBottom={hasNoMarginBottom}
    >
      <TopPartContainer className='d-flex space-between'>
        <SledpoolBlocHoursAndPlacesDisplay
          departure={departure}
          arrival={arrival}
          departureTime={departureHour}
          arrivalTime={arrivalHour}
        />
        <PriceContainer>{price}€</PriceContainer>
      </TopPartContainer>
      <BottomPartContainer className='d-flex space-between align-center'>
        <ProfileDisplay
          name={user.name}
          picture={user.picture}
          alt={user.name}
        />
        <SledDisplay
          dogs={dogs}
          seats={seats}
          availableSeats={availableSeats}
        />
      </BottomPartContainer>
    </SledpoolBlocContainer>
  );
};

const SledpoolBlocContainer = styled.div.attrs(
  (props: { hasNoMarginBottom: boolean }) => ({
    hasNoMarginBottom: props.hasNoMarginBottom,
  })
)`
  width: 100%;
  padding: ${smallSpace};
  background-color: white;
  border-radius: ${radius};
  margin-bottom: ${(props) => (props.hasNoMarginBottom ? 0 : smallSpace)};
  box-shadow: ${shadow};
  position: relative;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${mainLightColorShadow};
  }
`;

const TopPartContainer = styled.span`
  width: 100%;
  margin-bottom: ${normalSpace};
`;

const BottomPartContainer = styled.span`
  width: 100%;

  @media (max-width: ${tabletBreakPoint}) {
    flex-direction: column;
  }
`;

const PriceContainer = styled.span`
  font-weight: bold;
`;

export default SledpoolBloc;
