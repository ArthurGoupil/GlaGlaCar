import React from 'react';

import { data } from '../../data/data';
import { ISearchProps } from '../../types/SledPoolsSearchTypes';
import SearchBloc from './SearchBloc';

const SearchResults = ({
  departure,
  arrival,
  date,
  numberOfPassenger,
}: ISearchProps): JSX.Element => {
  console.log(departure, arrival, date, numberOfPassenger);
  console.log(data);

  return (
    <>
      <SearchBloc />
      <SearchBloc />
      <SearchBloc />
      <SearchBloc />
      <SearchBloc />
      <SearchBloc />
    </>
  );
};

export default SearchResults;
