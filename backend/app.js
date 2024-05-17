import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import { ruruHTML } from "ruru/server";
import schema from "./graphql/schema.js";
import root from "./graphql/root_resolvers.js";
import { randomBytes } from "crypto";
import bcrypt from "bcryptjs"
import {prisma} from "./db/prisma.js";

//Imports
// const schema = require("./schema/schema");

import express from "express"
// const cors = require('cors');


// constructing a graphql schema






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