import React from 'react';

import styled from 'styled-components';

import {
  mainColor,
  mainLightColor,
  inputHeight,
  miniRadius,
  miniShadow,
} from '../../styles/StylingConstants';
import { ButtonProps } from '../../types/UtilsTypes';

const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: ${mainLightColor};
  height: ${inputHeight};
  padding: 0 15px;
  border-radius: ${miniRadius};
  border: none;
  box-shadow: ${miniShadow};
  outline-color: ${mainLightColor};
  color: white;
  font-weight: bold;
  cursor: pointer;
  outline: ${mainColor};
`;

export default Button;
