import {GraphQLDate, GraphQLURL} from 'graphql-scalars'

const typeDefs = `#graphql
    scalar Date
    scalar URL
    
    type Game {
        _id: ID!
        name: String!
        description: String!
        price: Float!
        platform: [String!]!
        categories: [String!]!
        publisher: String!
        developer: String!
        releaseDate: Date
        coverImage: URL
        Images: [URL]
        ratings: [Rating]
    }

    extend type Query {
        games: [Game]
        game(_id: $ID): Game
    }

    #Only publishers can mutate games 

    extend type Mutation {
        addGame(game: AddGameInput!): Game
        editGame(_id: ID!, game: EditGameInput!): Game
        deleteGame(_id: ID!): Game
    }


    input AddGameInput {
        name: String!
        description: String!
        price: Float!
        platform: [String!]!
        categories: [String!]!
        publisher: String!
        developer: String!
        releaseDate: Date
        coverImage: URL
        Images: [URL]
    }

    input EditGameInput {
        name: String
        description: String
        price: Float
        platform: [String]
        categories: [String]
        publisher: String
        developer: String
        releaseDate: Date
        coverImage: URL
        Images: [URL]
    }
`

export default typeDefs;