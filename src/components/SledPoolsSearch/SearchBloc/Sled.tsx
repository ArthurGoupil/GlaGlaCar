import React from 'react';

import styled from 'styled-components';

import { mainLightColor } from '../../../styles/StylingConstants';

const Sled = (props: any): JSX.Element => {
  return (
    <div className='d-flex align-end'>
      <SledDogSVG src='/sleddog.svg' />
      <SledDogSVG src='/sleddog.svg' />
      <SledDogSVG src='/sleddog.svg' />
      <SledDogSVG src='/sleddog.svg' />
      <SledDogSVG src='/sleddog.svg' />
      <SledDogSVG src='/sleddog.svg' />
      <SledDogSVG src='/sleddog.svg' />
      <SledDogSVG src='/sleddog.svg' />
      <SledSVG src='/sled.svg' />
      <TakenSeatSVG src='/takenseat.svg' />
      <AvailableSeatSVG src='/availableseat.svg' />
      <AvailableSeatSVG src='/availableseat.svg' />
      <AvailableSeatSVG src='/availableseat.svg' />
      <AvailableSeatSVG src='/availableseat.svg' />
      <AvailableSeatSVG src='/availableseat.svg' />
      <AvailableSeatSVG src='/availableseat.svg' />
      <AvailableSeatSVG src='/availableseat.svg' />
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

export default Sled;
