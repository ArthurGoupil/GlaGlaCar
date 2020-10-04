import React from 'react';

import styled from 'styled-components';

import {
  radius,
  smallSpace,
  shadow,
  mainLightColorShadow,
} from '../../../styles/StylingConstants';
import { ISledpoolProps } from '../../../types/SledpoolsSearchTypes';
import SledDisplay from './SledDisplay';
import SearchBlocHoursAndPlacesDisplay from './SearchBlocHoursAndPlacesDisplay';
import ProfileDisplay from './ProfileDisplay';

const SearchBloc = ({
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
}: ISledpoolProps): JSX.Element => {
  return (
    <SearchBlocContainer className='d-flex space-between'>
      <LeftPartContainer className='d-flex flex-column space-between'>
        <SearchBlocHoursAndPlacesDisplay
          departure={departure}
          arrival={arrival}
          departureTime={departureHour}
          arrivalTime={arrivalHour}
        />
        <ProfileDisplay
          name={user.name}
          picture={user.picture}
          alt={user.name}
        />
      </LeftPartContainer>
      <RightPartContainer className='d-flex flex-column space-between align-end'>
        <PriceContainer>{price}€</PriceContainer>
        <SledDisplay
          dogs={dogs}
          seats={seats}
          availableSeats={availableSeats}
        />
      </RightPartContainer>
    </SearchBlocContainer>
  );
};

const SearchBlocContainer = styled.div`
  width: 70%;
  height: 220px;
  padding: ${smallSpace};
  background-color: white;
  border-radius: ${radius};
  margin-bottom: ${smallSpace};
  box-shadow: ${shadow};
  position: relative;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${mainLightColorShadow};
  }
`;

const LeftPartContainer = styled.span`
  height: 100%;
`;

const RightPartContainer = styled.span`
  height: 100%;
`;

const PriceContainer = styled.span`
  font-weight: bold;
`;

export default SearchBloc;
