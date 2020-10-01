import React from 'react';

import styled from 'styled-components';

import {
  mainColor,
  mainLightColor,
  inputHeight,
  miniRadius,
  miniShadow,
} from '../../styles/StylingConstants';
import { IButtonProps } from '../../types/UtilsTypes';

const Button = ({
  label,
  onClick,
  type,
  disabled,
}: IButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button.attrs((props: { disabled: boolean }) => ({
  disabled: props.disabled,
}))`
  background-color: ${mainLightColor};
  height: ${inputHeight};
  padding: 0 15px;
  border-radius: ${miniRadius};
  border: none;
  box-shadow: ${miniShadow};
  outline-color: ${mainLightColor};
  color: ${(props) => (props.disabled ? 'rgba(255, 255, 255, 0.5)' : 'white')};
  font-weight: bold;
  outline: ${mainColor};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export default Button;
