import React from 'react';

import { data } from '../../data/data';
import { getSimplifiedDate } from '../../helpers/globalHelpers';
import { ISearchProps, ISledpoolProps } from '../../types/SledpoolsSearchTypes';
import NoResultBloc from './NoResultBloc';
import SledpoolBloc from './SledpoolBloc';

const SearchResults = ({
  departure,
  arrival,
  date,
  numberOfPassenger,
}: ISearchProps): JSX.Element => {
  const matchingResults: ISledpoolProps[] = [];

  data.forEach((sledPool) => {
    if (
      getSimplifiedDate(sledPool.date, '/') === getSimplifiedDate(date, '/') &&
      sledPool.departure.toLocaleLowerCase() === departure &&
      sledPool.arrival.toLowerCase() === arrival &&
      sledPool.availableSeats >= numberOfPassenger
    )
      matchingResults.push(sledPool);
  });

  return (
    <>
      {matchingResults.length > 0 ? (
        matchingResults.map((sledPool, index) => {
          return <SledpoolBloc key={sledPool.id} {...sledPool} />;
        })
      ) : (
        <NoResultBloc numberOfPassenger={numberOfPassenger} />
      )}
    </>
  );
};

export default SearchResults;
