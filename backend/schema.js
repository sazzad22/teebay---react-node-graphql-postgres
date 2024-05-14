// import { makeExecutableSchema } from "@graphql-tools/schema";
const graphql = require("graphql")
const prisma = require("./db/prisma");



// const {
//     GraphQLObjectType,
//     GraphQLID,
//     GraphQLString,
//     GraphQLInt,
//     GraphQLSchema,
//     GraphQLNonNull
//   } = graphql;

// // type definations
// const UserType = new GraphQLObjectType({
//     name:"User",
//     fields:()=>({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         email: { type: GraphQLString },
//         password: { type: GraphQLString }
//     })
// })

// const RootQuery = new GraphQLObjectType({
//     name: "RootQueryType",
//     fields: {
//         // Define 'user' query to fetch user by ID
//         user: {
//             type: UserType,
//             args: { id: { type: GraphQLInt } },
//             resolve(parent, args) {
//                 return prisma.user.findUnique({
//                     where: { id: args.id }
//                 });
//             }
//         }
//     }
// });

// // Define Mutation for user registration
// const Mutation = new GraphQLObjectType({
//     name: "Mutation",
//     fields: {
//         registerUser: {
//             type: UserType,
//             args: {
//                 name: { type: new GraphQLNonNull(GraphQLString) },
//                 email: { type: new GraphQLNonNull(GraphQLString) },
//                 password: { type: new GraphQLNonNull(GraphQLString) }
//             },
//             async resolve(parent, args) {
//                 // Hash password
//                 const hashedPassword = await bcrypt.hash(args.password, 10);
//                 // Create user in database
//                 const user = await prisma.user.create({
//                     data: {
//                         name: args.name,
//                         email: args.email,
//                         password: hashedPassword
//                     }
//                 });
//                 return user;
//             }
//         },
//         // Mutation for user login
//         loginUser: {
//             type: GraphQLString,
//             args: {
//                 email: { type: new GraphQLNonNull(GraphQLString) },
//                 password: { type: new GraphQLNonNull(GraphQLString) }
//             },
//             async resolve(parent, args) {
//                 // Find user by email
//                 const user = await prisma.user.findUnique({
//                     where: { email: args.email }
//                 });
//                 if (!user) {
//                     throw new Error("User not found");
//                 }
//                 // Compare passwords
//                 const passwordMatch = await bcrypt.compare(args.password, user.password);
//                 if (!passwordMatch) {
//                     throw new Error("Invalid password");
//                 }
//                 // Generate JWT token
//                 const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
//                 return token;
//             }
//         }
//     }
// });


// module.exports = new GraphQLSchema({
//     query: RootQuery
//   });



