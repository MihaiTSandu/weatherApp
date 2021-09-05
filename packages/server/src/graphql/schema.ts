import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { join } from 'path';

const schema = loadSchemaSync(join(__dirname, 'features', '**', '*.gql'), {
  loaders: [new GraphQLFileLoader()],
});

export default schema;
