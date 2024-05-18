import { 
    signupUser,
    signinUser } from "../controllers/user.controller.js";

import { 
    createProduct,
    updateProduct,
    getAllProducts,
    getAllCatagories
 } from "../controllers/product.controller.js";
import {prisma} from "../db/prisma.js";


const root = {

    signupUser,
  
    signinUser,
  
    createProduct,
  
    updateProduct,

    getAllProducts,
  
    
    getAllCatagories
  }

  export default root