import userTypeDefs from './users.js';
import gameTypeDefs from './games.js';

const rootTypeDefs = `#graphql
  scalar Date

  ${userTypeDefs} 
  ${gameTypeDefs}

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default rootTypeDefs;