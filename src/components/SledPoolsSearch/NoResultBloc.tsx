import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import {
  alternateColor,
  radius,
  shadow,
  smallSpace,
  normalSpace,
} from '../../styles/StylingConstants';
import {
  getDateWithDaysOffset,
  getSimplifiedDate,
} from '../../helpers/globalHelpers';
import Button from '../Utils/Button';

type NoResultBlocProps = { numberOfPassenger: number };

const NoResultBloc = ({
  numberOfPassenger,
}: NoResultBlocProps): JSX.Element => {
  const history = useHistory();
  const simplifiedTomorrowDate = getSimplifiedDate(
    getDateWithDaysOffset(new Date(), 1),
    '-'
  );

  return (
    <NoResultContainer className='d-flex flex-column align-center'>
      <QuoteContainer className='d-flex justify-center'>
        <QuoteText>
          Sorry, we are busy fishing!
          <br />
          If you accept to go from Paris to Lapland tomorrow, I'm sure you'll
          find a sledpool...
        </QuoteText>
        <QuoteArrow />
      </QuoteContainer>
      <NoResultSVG src='/noresult.svg' alt='' />
      <Button
        label="Accept Yapluk's advice"
        onClick={() =>
          history.push(
            `/sledpoolssearch/paris/lapland/${simplifiedTomorrowDate}/${numberOfPassenger}`
          )
        }
        type='button'
        disabled={false}
      />
    </NoResultContainer>
  );
};

const NoResultContainer = styled.div`
  width: 70%;
  background-color: white;
  border-radius: ${radius};
  box-shadow: ${shadow};
  padding: ${normalSpace};
  font-style: italic;
  text-align: center;
`;

const NoResultSVG = styled.img`
  width: 80%;
  margin-top: ${smallSpace};
`;

const QuoteContainer = styled.div`
  width: 70%;
  background-color: white;
  border-bottom: 4px solid ${alternateColor};
  position: relative;
  padding-bottom: 15px;
  margin-bottom: -60px;
`;

const QuoteText = styled.p`
  z-index: 2;
`;

const QuoteArrow = styled.div`
  width: 80px;
  height: 80px;
  background-color: white;
  border-right: 4px solid ${alternateColor};
  border-bottom: 4px solid ${alternateColor};
  transform: rotate(45deg);
  position: absolute;
  bottom: -42px;
  z-index: 1;
`;

export default NoResultBloc;
