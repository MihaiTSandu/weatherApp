const graphql = require("graphql");

const { GraphQLObjectType, GRaphQLSchema, GraphQLFloat, GraphQLString } =
  graphql;

let LocationType = new GraphQLObjectType({
  name: "City",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
  }),
});

let RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    city: {
      type: LocationType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {},
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
