import React from 'react';

import styled from 'styled-components';
import { MdRadioButtonUnchecked, MdFilterHdr } from 'react-icons/md';

import {
  mainLightColor,
  miniRadius,
  smallSpace,
  miniShadow,
  inputHeight,
} from '../../styles/StylingConstants';
import { InputProps } from '../../types/UtilsTypes';

const Input = ({
  name,
  value,
  onChange,
  placeholder,
  icon,
  hasMarginRight,
}: InputProps): JSX.Element => {
  const getIcon = (icon: string): JSX.Element => {
    switch (icon) {
      case 'radio-button-unchecked':
        return <MdRadioButtonUnchecked />;
      case 'filter-hdr':
        return <MdFilterHdr />;
    }
    return <MdRadioButtonUnchecked />;
  };

  return (
    <InputContainer hasMarginRight={hasMarginRight}>
      <IconContainer className='d-flex align-center'>
        {getIcon(icon)}
      </IconContainer>
      <StyledInput
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div.attrs(
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
`;

const StyledInput = styled.input`
  height: ${inputHeight};
  padding: 0 15px 0 35px;
  border-radius: ${miniRadius};
  border: none;
  box-shadow: ${miniShadow};
  outline-color: ${mainLightColor};
  cursor: pointer;
`;

export default Input;
