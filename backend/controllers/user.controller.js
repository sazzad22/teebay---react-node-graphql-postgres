import bcrypt from "bcryptjs"
import {prisma} from "../db/prisma.js";

const signupUser = async ({ name, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }

const signinUser = async ({ email, password }) => {
    const user = await prisma.user.findFirst({
      where:{
        email:email
      }
    });
    if (!user) {
      // throw new Error("User not found");
      return user
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      // throw new Error("Invalid password");
      return null
    }
    return user;
  }

export {
    signupUser ,
    signinUser
}