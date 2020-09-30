import React, { useState } from 'react';

import styled from 'styled-components';

import Input from './Input';

const MainForm: React.FC = () => {
  const [departure, setDeparture] = useState<string>('');

  return (
    <Form className='d-flex justify-center align-center'>
      <Input
        name='departure'
        value={departure}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDeparture(e.target.value)
        }
        placeholder='Leaving from...'
        icon='radio-button-unchecked'
        hasMarginRight
      />
      <Input
        name='arrival'
        value={departure}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDeparture(e.target.value)
        }
        placeholder='Going to...'
        icon='keyboard-tab'
      />
    </Form>
  );
};

export default MainForm;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;
