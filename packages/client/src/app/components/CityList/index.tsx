import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';

const getCityQuery = gql`
  {
    city {
      name
      id
    }
  }
`;

export default function CityList() {
  const { data } = useQuery(getCityQuery);
  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <div id="CityList-Image">
      <ul>
        <li>City Name</li>
      </ul>
    </div>
  );
}
