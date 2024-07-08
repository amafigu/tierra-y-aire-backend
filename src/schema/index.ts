import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Concert {
    id: ID!
    venue: String!
    venueLink: String!
    city: String!
    country: String!
    ticketsLink: String!
    concertDate: String!
  }

  type Query {
    getConcerts: [Concert]
    getConcertById(id: ID!): Concert
  }

  type Mutation {
    addConcert(
    venue: String!
    venueLink: String!
    city: String!
    country: String!
    ticketsLink: String!
    concertDate: String!
    ): Concert
  }
`;