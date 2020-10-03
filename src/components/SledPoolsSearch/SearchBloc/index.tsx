import React from 'react';

import styled from 'styled-components';

import {
  radius,
  smallSpace,
  shadow,
  mainLightColorShadow,
} from '../../../styles/StylingConstants';
import Sled from './Sled';
import SearchBlocHoursAndPlacesDisplay from './SearchBlocHoursAndPlacesDisplay';
import ProfileDisplay from './ProfileDisplay';

const SearchBloc = (): JSX.Element => {
  return (
    <SearchBlocContainer className='d-flex space-between'>
      <LeftPartContainer className='d-flex flex-column space-between'>
        <SearchBlocHoursAndPlacesDisplay
          departure='Paris'
          arrival='Lapland'
          departureTime='14h00'
          arrivalTime='17h00'
        />
        <ProfileDisplay
          src='https://res.cloudinary.com/goupil/image/upload/v1601632611/glaglacar/inuit-f4_mipdjh.png'
          alt='Yuklek'
        />
      </LeftPartContainer>
      <RightPartContainer className='d-flex flex-column space-between align-end'>
        <PriceContainer>120€</PriceContainer>
        <Sled />
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
