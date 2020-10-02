import React from 'react';

import styled from 'styled-components';

import {
  mainColor,
  mainLightColor,
  radius,
  smallSpace,
  shadow,
  mainLightColorShadow,
} from '../../styles/StylingConstants';

const SearchBloc = (): JSX.Element => {
  return (
    <SearchBlocContainer className='d-flex space-between'>
      <LeftPartContainer className='d-flex flex-column space-between'>
        <LeftTopPartContainer className='d-flex flex-column space-between'>
          <span className='d-flex align-center'>
            14h00 <Circle /> Paris
          </span>
          <HorizontalBar />
          <span className='d-flex align-center'>
            16h00 <Circle /> Lapland
          </span>
        </LeftTopPartContainer>
        <div className='d-flex align-center'>
          <ProfilePicture
            src='https://res.cloudinary.com/goupil/image/upload/v1601632611/glaglacar/inuit-f4_mipdjh.png'
            alt=''
          />
          Yapluk
        </div>
      </LeftPartContainer>
      <PriceContainer>120€</PriceContainer>
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

const LeftTopPartContainer = styled.span`
  font-weight: bold;
  height: 100px;
`;

const PriceContainer = styled.span`
  font-weight: bold;
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

const ProfilePicture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 3px solid ${mainLightColor};
  margin-right: calc(${smallSpace} / 2);
`;

export default SearchBloc;
