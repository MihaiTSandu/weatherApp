// eslint-disable-next-line max-classes-per-file
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const fs = require('fs');

const schema = buildSchema(`

  input UserInput {
    cities: [CityInput]
  }

  type User {
    name: String
    id: ID!
    cities: [City]
  }

  input CityInput {
    name: String
    latitude: Float
    longitude: Float
    owner: UserInput
  }

  type City {
    id: ID!
    name: String
    latitude: Float
    longitude: Float
    owner: User
  }

  type Query {
    getCity(id: ID!): City
    getUser(id: ID!): User
  }

  type Mutation {
    createCity(input: CityInput): City
    updateCity(id: ID!, input: CityInput): City
    createUser(input: UserInput) : User
    updateUser(id: ID!, input: UserInput) : User
  }
`);

interface ICityInfo {
  name: string;
  latitude: number;
  longitude: number;
  owner: IUserInfo;
}

interface IUserInfo {
  name: string;
  cities: ICityInfo[];
}

// If City had any complex fields, we'd put them on this object.
class City {
  name: ICityInfo['name'];

  latitude: ICityInfo['latitude'];

  longitude: ICityInfo['longitude'];

  owner: IUserInfo;

  constructor(public id: any, {
    name, latitude, longitude, owner,
  }: ICityInfo) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.owner = owner;
  }
}

class User {
  name: IUserInfo['name'];

  cities: ICityInfo[];

  constructor(public id: any, { name, cities }: IUserInfo) {
    this.id = id;
    this.name = name;
    this.cities = cities;
  }
}

// Maps username to name
let fakeDatabase = {};

const root = {
  getUser: ({ id }) => {
    fs.readFile('saved-cities.json', 'utf-8', (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      } else {
        fakeDatabase = JSON.parse(data);
      }
    });
    if (!fakeDatabase[id]) {
      throw new Error(`no user exists with id ${id}`);
    }
    return new User(id, fakeDatabase[id]);
  },

  // getCity: ({ id }) => {
  //   fs.readFile('saved-cities.json', 'utf-8', (err, data) => {
  //     if (err) {
  //       // eslint-disable-next-line no-console
  //       console.error(err);
  //     } else {
  //       fakeDatabase = JSON.parse(data);
  //     }
  //   });
  //   if (!fakeDatabase[id]) {
  //     throw new Error(`no city exists with id ${id}`);
  //   }
  //   return new City(id, fakeDatabase[id]);
  // },

  createUser: ({ input }) => {
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
    fs.writeFile('saved-cities.json', JSON.stringify(fakeDatabase), () => { });

    return new User(id, input);
  },

  // createCity: ({ input }) => {
  //   // Create a random id for our "database".
  //   // const id = require("crypto").randomBytes(10).toString("hex");
  //   fs.readFile('saved-cities.json', 'utf-8', async (err, data) => {
  //     if (err) {
  //       // eslint-disable-next-line no-console
  //       console.error(err);
  //     } else {
  //       fakeDatabase = JSON.parse(data);
  //       console.log(fakeDatabase);
  //     }
  //   });
  //   //  !!! ???
  //   const id = Object.keys(fakeDatabase).length + 1;

  //   fakeDatabase[id] = input;
  //   fs.writeFile('saved-cities.json', JSON.stringify(fakeDatabase), () => {});

  //   return new City(id, input);
  // },
  updateCity: ({ id, input }) => {
    if (!fakeDatabase[id]) {
      throw new Error(`no city exists with id ${id}`);
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input;
    return new City(id, input);
  },
  // updateUser: ({ id, input }) => {
  //   let user;
  //   return user;
  // },
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
