import React from 'react';

import styled from 'styled-components';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { MdKeyboardTab } from 'react-icons/md';

import { lightBlue, miniRadius } from '../styles/StylingConstants';
import { InputProps } from '../types/InputTypes';

const Input = ({
  name,
  value,
  onChange,
  placeholder,
  icon,
  hasMarginRight,
}: InputProps): any => {
  const getIcon = (icon: string): JSX.Element => {
    switch (icon) {
      case 'radio-button-unchecked':
        return <MdRadioButtonUnchecked />;
      case 'keyboard-tab':
        return <MdKeyboardTab />;
    }
    return <MdRadioButtonUnchecked />;
  };

  return (
    <>
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
    </>
  );
};

const InputContainer = styled.div.attrs(
  (props: { hasMarginRight: boolean }) => ({
    hasMarginRight: props.hasMarginRight,
  })
)`
  position: relative;
  margin-right: ${(props) => (props.hasMarginRight ? '20px' : 0)};
`;

const IconContainer = styled.div`
  position: absolute;
  left: 7px;
  height: 100%;
  font-size: 1.7rem;
`;

const StyledInput = styled.input`
  padding: 10px 10px 10px 30px;
  border-radius: ${miniRadius};
  border: none;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  outline-color: ${lightBlue};
`;

export default Input;
