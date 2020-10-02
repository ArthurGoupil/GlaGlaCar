import React from 'react';

import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdToday } from 'react-icons/md';

import {
  mainLightColor,
  miniRadius,
  miniShadow,
  smallSpace,
  inputHeight,
} from '../../styles/StylingConstants';
import { getDateDisplay } from '../../helpers/globalHelpers';
import { IDatePickerInputProps } from '../../types/UtilsTypes';

const DatePickerInput = ({
  date,
  onChange,
  placeholder,
  hasMarginRight,
}: IDatePickerInputProps): JSX.Element => {
  return (
    <DatePickerContainer hasMarginRight={hasMarginRight}>
      <IconContainer className='d-flex align-center'>
        <MdToday />
      </IconContainer>
      <DatePicker
        selected={date}
        onChange={onChange}
        dateFormat='MM/dd/yyyy'
        minDate={new Date()}
        placeholderText={placeholder}
        customInput={<StyledDatePicker />}
        value={getDateDisplay(date)}
      />
    </DatePickerContainer>
  );
};

const DatePickerContainer = styled.div.attrs(
  (props: { hasMarginRight: boolean }) => ({
    hasMarginRight: props.hasMarginRight,
  })
)`
  position: relative;
  margin-right: ${(props) => (props.hasMarginRight ? smallSpace : 0)};
`;

const IconContainer = styled.div`
  position: absolute;
  left: 7px;
  height: 100%;
  font-size: 22px;
  z-index: 1;
`;

const StyledDatePicker = styled.input`
  width: 150px;
  height: ${inputHeight};
  padding: 0 15px 0 35px;
  border-radius: ${miniRadius};
  border: none;
  box-shadow: ${miniShadow};
  outline-color: ${mainLightColor};
  cursor: pointer;
`;

export default DatePickerInput;
