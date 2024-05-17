import { 
    signupUserResolver,
    signinUserResolver } from "../controllers/user.controller.js";

import { 
    createProductResolver,
    updateProductResolver,
    getAllProductsResolver,
 } from "../controllers/product.controller.js";
import {prisma} from "../db/prisma.js";


const root = {

    signupUser: signupUserResolver,
  
    signinUser: signinUserResolver,
  
    createProduct: createProductResolver,
  
    updateProduct: updateProductResolver,

    getAllProducts: getAllProductsResolver
  
    
    
  }

  export default root