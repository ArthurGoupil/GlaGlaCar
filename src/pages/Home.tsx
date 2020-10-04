import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { MdInfo } from 'react-icons/md';

import { ISearchProps } from '../types/SledpoolsSearchTypes';
import { headerHeight, homeFormBreakPoint } from '../styles/StylingConstants';
import { getSimplifiedDate } from '../helpers/globalHelpers';
import Input from '../components/Utils/Input';
import DatePickerInput from '../components/Utils/DatePickerInput';
import NumericInput from '../components/Utils/NumericInput';
import Button from '../components/Utils/Button';

const Home = (): JSX.Element => {
  const history = useHistory();

  const [departure, setDeparture] = useState<string>('');
  const [arrival, setArrival] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [numberOfPassenger, setNumberOfPassenger] = useState<number>(1);

  const onNumericInputChange = (numericChangeType: string): void => {
    if (numericChangeType === 'INCREMENT' && numberOfPassenger < 9) {
      setNumberOfPassenger(numberOfPassenger + 1);
    } else if (numericChangeType === 'DECREMENT' && numberOfPassenger > 1) {
      setNumberOfPassenger(numberOfPassenger - 1);
    }
  };

  const isReadyToSearch = ({
    departure,
    arrival,
    date,
    numberOfPassenger,
  }: ISearchProps): boolean => {
    if (departure && arrival && date && numberOfPassenger) return true;
    else return false;
  };

  return (
    <FormContainer className='d-flex flex-column justify-center align-center'>
      <Form className='d-flex' autoComplete='off'>
        <Input
          name='departure'
          value={departure}
          type='text'
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
          type='text'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setArrival(e.target.value)
          }
          placeholder='Going to...'
          icon='filter-hdr'
          hasMarginRight
        />
        <DateAndPassengerInputs className='d-flex justify-center align-center'>
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
        </DateAndPassengerInputs>
        <Button
          label='Slide!'
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            history.push(
              `/sledpoolssearch/${departure.toLowerCase()}/${arrival.toLowerCase()}/${getSimplifiedDate(
                date,
                '-'
              )}/${numberOfPassenger}`
            );
          }}
          type='submit'
          disabled={
            !isReadyToSearch({ departure, arrival, date, numberOfPassenger })
          }
        />
      </Form>
      <HintContainer className='d-flex align-center'>
        <HintIconContainer>
          <MdInfo />
        </HintIconContainer>
        <HintText>
          There's not much available sledpools at the moment... Why don't you
          try to go from Paris to Lapland tomorrow?
        </HintText>
      </HintContainer>
    </FormContainer>
  );
};

const FormContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - ${headerHeight});
`;

const Form = styled.form`
  width: 100%;
  @media (max-width: ${homeFormBreakPoint}) {
    flex-direction: column;
  }
`;

const DateAndPassengerInputs = styled.div`
  @media (max-width: ${homeFormBreakPoint}) {
    flex-direction: column;
  }
`;

const HintContainer = styled.div`
  margin-top: 10px;
`;

const HintIconContainer = styled.div`
  font-size: 25px;
`;

const HintText = styled.p`
  font-size: 14px;
  margin-left: 10px;
`;

export default Home;
