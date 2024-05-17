import bcrypt from "bcryptjs"
import {prisma} from "../db/prisma.js";

const signupUserResolver = async ({ name, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }

const signinUserResolver = async ({ email, password }) => {
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
  }

export {
    signupUserResolver,
    signinUserResolver
}