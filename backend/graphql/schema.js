import { buildSchema } from "graphql";



const schema = buildSchema(`
  type User {
    id: ID!
    name: String
    email: String
    password: String
  }

  type Product {
    id: Int
    createdAt: String
    updatedAt: String
    name: String
    ownerEmail: String
    owner: User
    bought: Boolean
    sold: Boolean
    rented: Boolean
    categories: [String]
  }
  
  type Category {
    id: Int
    name: String
  }

  type Query {
    getUser(id: ID!): User
    getAllProducts: [Product]
    getProductsOfUser(ownerEmail: String!): [Product]
    getProduct(id: Int!): Product
  }

  type Mutation {
    signupUser(name: String!, email: String!, password: String!): User
    signinUser(email: String!, password: String!): User

    createProduct(name: String, ownerEmail: String,catagories:[String]) : Product
    updateProduct(id:Int!,name: String, ownerEmail: String,catagories:[String],bought: Boolean,sold: Boolean,rented: Boolean) : Product
  }
  
`)

export default schema