const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const fs = require('fs');

// Reading the json file

const schema = buildSchema(`
  input CityInput {
    name: String
    latitude: Float
    longitude: Float
  }
  type City {
    id: ID!
    name: String
    latitude: Float
    longitude: Float
  }
  type Query {
    getCity(id: ID!): City
  }
  type Mutation {
    createCity(input: CityInput): City
    updateCity(id: ID!, input: CityInput): City
  }
`);

interface ICityInfo {
  name: string;
  latitude: number;
  longitude: number;
}

// If City had any complex fields, we'd put them on this object.
class City {
  name: ICityInfo['name'];

  latitude: ICityInfo['latitude'];

  longitude: ICityInfo['longitude'];

  constructor(public id: any, { name, latitude, longitude }: ICityInfo) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

// Maps username to name
let fakeDatabase = {};

const root = {
  getCity: ({ id }) => {
    fs.readFile('saved-cities.json', 'utf-8', (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      } else {
        fakeDatabase = JSON.parse(data);
      }
    });
    if (!fakeDatabase[id]) {
      throw new Error(`no city exists with id ${id}`);
    }
    return new City(id, fakeDatabase[id]);
  },
  createCity: ({ input }) => {
    // Create a random id for our "database".
    // const id = require("crypto").randomBytes(10).toString("hex");
    fs.readFile('saved-cities.json', 'utf-8', async (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      } else {
        fakeDatabase = JSON.parse(data);
      }
    });
    const id = Object.keys(fakeDatabase).length + 1;

    fakeDatabase[id] = input;
    fs.writeFile('saved-cities.json', JSON.stringify(fakeDatabase), () => {});

    return new City(id, input);
  },
  updateCity: ({ id, input }) => {
    if (!fakeDatabase[id]) {
      throw new Error(`no city exists with id ${id}`);
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input;
    return new City(id, input);
  },
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);
app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});
