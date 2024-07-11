import userTypeDefs from './users.js';

const rootTypeDefs = `#graphql
  scalar Date

  ${userTypeDefs}

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default rootTypeDefs;