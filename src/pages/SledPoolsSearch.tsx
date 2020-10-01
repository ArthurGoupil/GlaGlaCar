import React from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

const SledPoolsSearch: React.FC = (props: any) => {
  const {
    departure,
    arrival,
    date,
    numberOfPassenger,
  }: { [key: string]: string } = useParams();

  const numberOfPassengerToNum = Number(numberOfPassenger);

  return <div></div>;
};

const SearchRecap = styled.div``;

export default SledPoolsSearch;
