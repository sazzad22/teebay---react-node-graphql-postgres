import { prisma } from "../db/prisma.js";

const createProductResolver = async ({ name, ownerEmail, catagories }) => {
  const createPost = await prisma.product.create({
    data: {
      name: name,
      ownerEmail: ownerEmail,
      categories: catagories,
    },
  });
  return createPost;
};

const updateProductResolver = async ({
  id,
  name,
  ownerEmail,
  catagories,
  bought,
  sold,
  rented,
}) => {
  
  const createPostAndCategory = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      ownerEmail: ownerEmail,
      categories: catagories,
      bought: bought,
      sold: sold,
      rented: rented,
    },
  });
  return createPostAndCategory;
};

const getAllProductsResolver = async () => {
 const allProducts = await prisma.product.findMany()
 console.log("allProducts",allProducts)
 return allProducts
};
export { 
  createProductResolver, 
  updateProductResolver,
  getAllProductsResolver
 };
