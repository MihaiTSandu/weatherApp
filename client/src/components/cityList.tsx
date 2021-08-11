import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";

const getCityQuery = gql`
  {
    city {
      name
      id
    }
  }
`;

function CityList(props: any) {
  console.log(props);
  const { loading, error, data } = useQuery(getCityQuery);
  console.log(data);
  return (
    <div id="CityList-Image">
      <ul>
        <li>City Name</li>
      </ul>
    </div>
  );
}

// export default graphql(getCityQuery)(CityList);
export default CityList;
