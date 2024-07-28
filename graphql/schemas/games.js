import {GraphQLDate, GraphQLURL} from 'graphql-scalars'

const typeDefs = `#graphql
    scalar Date
    scalar URL
    
    type Game {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        platform: [String!]!
        categories: [String!]!
        publisher: String!
        developer: String!
        url: String!
        releaseDate: Date
        coverImage: URL
        Images: [URL]
    }

    extend type Query {
        games(offset: Int!, limit: Int!, platform: String, price: Float): [Game]
        game(_id: ID!): Game
        gamesByPlatform(platform: String!, offset: Int!, limit: Int!): [Game]
        gamesByPrice(price: Float!, offset: Int!, limit: Int!): [Game]
    }

    extend type Mutation {
        addGame(game: AddGameInput!): Game
        editGame(_id: ID!, game: EditGameInput!): Game
        deleteGame(_id: ID!): Game
    }


    input AddGameInput {
        title: String!
        description: String!
        price: Float!
        platform: [String!]!
        categories: [String!]!
        publisher: String!
        developer: String!
        url: String
        releaseDate: Date
        coverImage: URL
        Images: [URL]
    }

    input EditGameInput {
        title: String
        description: String
        price: Float
        platform: [String]
        categories: [String]
        publisher: String
        url: String
        developer: String
        releaseDate: Date
        coverImage: URL
        Images: [URL]
    }
`

export default typeDefs;