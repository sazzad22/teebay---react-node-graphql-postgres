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

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    signupUser(name: String!, email: String!, password: String!): User
    signinUser(email: String!, password: String!): User
  }
  
`)


class Message {
  constructor(id, { content, author }) {
    this.id = id
    this.content = content
    this.author = author
  }
}

var fakeDatabase = {}
// resolver function for each api endpoint
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