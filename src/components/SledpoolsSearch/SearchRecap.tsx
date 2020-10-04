import React from 'react';

import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

import { ISearchProps } from '../../types/SledpoolsSearchTypes';
import {
  mainColor,
  mainLightColor,
  radius,
  smallSpace,
  normalSpace,
} from '../../styles/StylingConstants';
import { capitalizeString, getDateDisplay } from '../../helpers/globalHelpers';

const SearchRecap = ({
  departure,
  arrival,
  date,
  numberOfPassenger,
}: ISearchProps): JSX.Element => {
  return (
    <SearchRecapContainer className='d-flex align-center'>
      <IconContainer>
        <MdSearch />
      </IconContainer>
      <div>
        <FirstRecapLine>
          From <b>{capitalizeString(departure)}</b> to{' '}
          <b>{capitalizeString(arrival)}</b>
        </FirstRecapLine>
        <SecondRecapLine>
          {getDateDisplay(new Date(date))}, {numberOfPassenger} passenger
          {numberOfPassenger > 1 && 's'}
        </SecondRecapLine>
      </div>
    </SearchRecapContainer>
  );
};

const SearchRecapContainer = styled.div`
  width: 100%;
  background-color: ${mainColor};
  color: white;
  padding: ${smallSpace};
  border-radius: ${radius};
  margin-bottom: ${normalSpace};
`;

const IconContainer = styled.div`
  font-size: 40px;
  color: ${mainLightColor};
  margin-right: ${smallSpace};
`;

const FirstRecapLine = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

const SecondRecapLine = styled.p`
  font-size: 14px;
`;

export default SearchRecap;
