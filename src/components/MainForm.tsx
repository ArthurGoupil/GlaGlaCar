import React, { useState } from 'react';

import styled from 'styled-components';

import Input from './Utils/Input';
import DatePickerInput from './Utils/DatePickerInput';
import NumericInput from './Utils/NumericInput';
import Button from './Utils/Button';

const MainForm: React.FC = () => {
  const [departure, setDeparture] = useState<string>('');
  const [arrival, setArrival] = useState<string>('');
  const [date, setDate] = useState<Date>();
  const [numberOfPassenger, setNumberOfPassenger] = useState<number>(1);

  console.log(date);

  const onNumericInputChange = (numericChangeType: string): void => {
    if (numericChangeType === 'INCREMENT' && numberOfPassenger < 9) {
      setNumberOfPassenger(numberOfPassenger + 1);
    } else if (numericChangeType === 'DECREMENT' && numberOfPassenger > 1) {
      setNumberOfPassenger(numberOfPassenger - 1);
    }
  };

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
        value={arrival}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setArrival(e.target.value)
        }
        placeholder='Going to...'
        icon='filter-hdr'
        hasMarginRight
      />
      <DatePickerInput
        date={date}
        onChange={(date) => setDate(date)}
        placeholder='When?'
        hasMarginRight
      />
      <NumericInput
        value={numberOfPassenger}
        onChange={(numericChangeType) =>
          onNumericInputChange(numericChangeType)
        }
        hasMarginRight
      />
      <Button
        label='Slide!'
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          console.log('good');
        }}
      />
    </Form>
  );
};

export default MainForm;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;
