var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
const fs = require("fs");

// Reading the json file

var schema = buildSchema(`
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

// If City had any complex fields, we'd put them on this object.
class City {
  constructor(id, { name, latitude, longitude }) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

// Maps username to name
var fakeDatabase = {};

var root = {
  getCity: ({ id }) => {
    fs.readFile("savedCities.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.parse(data));
        fakeDatabase = JSON.parse(data);
      }
    });
    if (!fakeDatabase[id]) {
      throw new Error("no City exists with id " + id);
    }
    return new City(id, fakeDatabase[id]);
  },
  createCity: ({ input }) => {
    // Create a random id for our "database".
    // var id = require("crypto").randomBytes(10).toString("hex");
    fs.readFile("savedCities.json", "utf-8", async (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.parse(data));
        fakeDatabase = JSON.parse(data);
      }
    });
    console.log(fakeDatabase);
    const id = Object.keys(fakeDatabase).length + 1;

    fakeDatabase[id] = input;
    fs.writeFile("savedCities.json", JSON.stringify(fakeDatabase), () => {});

    return new City(id, input);
  },
  updateCity: ({ id, input }) => {
    if (!fakeDatabase[id]) {
      throw new Error("no City exists with id " + id);
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input;
    return new City(id, input);
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(3999, () => {
  console.log("Running a GraphQL API server at localhost:3999/graphql");
});