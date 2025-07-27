const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    category: String!
    price: Float!
    inStock: Boolean!
    tags: [String!]!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product!
  }

  type Mutation {
    createProduct(
      name: String!
      category: String!
      inStock: Boolean!
      price: Float!
      tags: [String!]!
    ): Product!

    updateProduct(
      id: ID!
      name: String
      category: String
      inStock: Boolean
      price: Float
      tags: [String]
    ): Product
  }
`;

module.exports = typeDefs;
