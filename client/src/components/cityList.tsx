import React, { Component } from "react";
import {gql} from 'apollo-boost';
import { graphql } from "react-apollo";

const getBooksQuery = gql`
{
  city {
    name
    id
  }
}
`


class CityList extends Component {
    render() {
      console.log(this.props);
      return (
        <div id="CityList-Image">
            <ul>
                <li>Book Name</li>
            </ul>
        </div>
      );
    }
  }
  
  export default graphql(getBooksQuery)(CityList);