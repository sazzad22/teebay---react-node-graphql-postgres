import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import { ruruHTML } from "ruru/server";
import { randomBytes } from "crypto";
import bcrypt from "bcryptjs"
import {prisma} from "./db/prisma.js";

//Imports
// const schema = require("./schema/schema");

import express from "express"
// const cors = require('cors');


// constructing a graphql schema
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
    getProduct(id: Int!): Product
  }

  type Mutation {
    signupUser(name: String!, email: String!, password: String!): User
    signinUser(email: String!, password: String!): User
    
    createProduct(name: String, ownerEmail: String,catagories:[String]) : Product
    updateProduct(name: String, ownerEmail: String,catagories:[String]) : Product
  }
  
`)


const root = {

  signupUser: async ({ name, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  },

  signinUser: async ({ email, password }) => {
    const user = await prisma.user.findFirst({
      where:{
        email:email
      }
    });
    if (!user) {
      throw new Error("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Invalid password");
    }
    return user;
  },

  createProduct: async({name,ownerEmail,categoryList})=>{
    const createPostAndCategory = await prisma.product.create({
      data: {
        name: name,
        ownerEmail:ownerEmail,
        categories: categoryList,
      },
    })
    return createPostAndCategory
  }
  
}


const app = express();


app.all(
  "/graphql",
  createHandler({
    schema:schema,
    rootValue:root
  })
)

//home response
app.get('/',async (req, res) => {
  res.type("html")
  res.end(ruruHTML({endpoint:"/graphql"}))
})





export {app}