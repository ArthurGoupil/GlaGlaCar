import React from 'react';

import styled from 'styled-components';

import { mainLightColor, smallSpace } from '../../../styles/StylingConstants';
import { IProfileDisplayProps } from '../../../types/SledPoolsSearchTypes';

const ProfileDisplay = ({ src, alt }: IProfileDisplayProps): JSX.Element => {
  return (
    <div className='d-flex align-center'>
      <ProfilePictureIMG src={src} alt={alt} />
      Yapluk
    </div>
  );
};

const ProfilePictureIMG = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 3px solid ${mainLightColor};
  margin-right: calc(${smallSpace} / 2);
`;

export default ProfileDisplay;
