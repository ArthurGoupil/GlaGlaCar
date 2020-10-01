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
import { getSimplifiedDate } from '../../helpers/globalHelpers';
import { IDatePickerInputProps } from '../../types/UtilsTypes';

const DatePickerInput = ({
  date,
  onChange,
  placeholder,
  hasMarginRight,
}: IDatePickerInputProps): JSX.Element => {
  const isToday = (date: Date, daysOffset?: number): boolean => {
    let referenceDay = new Date();
    if (daysOffset)
      referenceDay = new Date(referenceDay.setDate(referenceDay.getDate() + 1));
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayOfToday = referenceDay.getDate();
    const monthOfToday = referenceDay.getMonth();
    const yearOfToday = referenceDay.getFullYear();

    return day === dayOfToday && month === monthOfToday && year === yearOfToday;
  };

  const getDisplayedValue = (date: Date): string => {
    if (isToday(date)) return `Aujourd'hui`;
    else if (isToday(date, 1)) return 'Demain';
    else return getSimplifiedDate(date, '/');
  };

  return (
    <DatePickerContainer hasMarginRight={hasMarginRight}>
      <IconContainer className='d-flex align-center'>
        <MdToday />
      </IconContainer>
      <DatePicker
        selected={date}
        onChange={onChange}
        dateFormat='dd/MM/yyyy'
        minDate={new Date()}
        placeholderText={placeholder}
        customInput={<StyledDatePicker />}
        value={getDisplayedValue(date)}
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
