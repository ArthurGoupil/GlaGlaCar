import React from 'react';

import styled from 'styled-components';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';

import {
  mainColor,
  mainLightColor,
  miniRadius,
  smallSpace,
  miniShadow,
  inputHeight,
} from '../../styles/StylingConstants';
import { INumericInputProps } from '../../types/UtilsTypes';

const NumericInput = ({
  value,
  onChange,
  hasMarginRight,
}: INumericInputProps): JSX.Element => {
  return (
    <NumericInputAndControllersContainer
      className='d-flex'
      hasMarginRight={hasMarginRight}
    >
      <NumericInputController
        className='d-flex justify-center align-center'
        onClick={() => onChange('DECREMENT')}
        currentValue={value}
        changeType='DECREMENT'
      >
        -
      </NumericInputController>
      <NumericInputContainer>
        <IconContainer className='d-flex align-center'>
          <MdAirlineSeatReclineNormal />
        </IconContainer>
        <StyledNumericInput value={value} readOnly />
      </NumericInputContainer>
      <NumericInputController
        className='d-flex justify-center align-center'
        onClick={() => onChange('INCREMENT')}
        currentValue={value}
        changeType='INCREMENT'
      >
        +
      </NumericInputController>
    </NumericInputAndControllersContainer>
  );
};

const NumericInputAndControllersContainer = styled.div.attrs(
  (props: { hasMarginRight: boolean }) => ({
    hasMarginRight: props.hasMarginRight,
  })
)`
  position: relative;
  margin-right: ${(props) => (props.hasMarginRight ? smallSpace : 0)};
`;

const NumericInputContainer = styled.div`
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  left: 7px;
  height: 100%;
  font-size: 22px;
`;

const StyledNumericInput = styled.input`
  width: 60px;
  height: ${inputHeight};
  padding: 0 15px 0 35px;
  border-radius: ${miniRadius};
  border: none;
  box-shadow: ${miniShadow};
  outline-color: ${mainLightColor};
  pointer-events: none;
`;

const NumericInputController = styled.div.attrs(
  (props: { currentValue: number; changeType: string }) => ({
    currentValue: props.currentValue,
    changeType: props.changeType,
  })
)`
  width: ${inputHeight};
  height: ${inputHeight};
  margin: 0 10px;
  padding-bottom: 5px;
  border-radius: ${miniRadius};
  background-color: ${mainColor};
  color: white;
  font-size: 30px;
  font-weight: bold;
  user-select: none;
  cursor: ${(props) =>
    (props.currentValue === 1 && props.changeType === 'DECREMENT') ||
    (props.currentValue === 9 && props.changeType === 'INCREMENT')
      ? 'not-allowed'
      : 'pointer'};
`;

export default NumericInput;
