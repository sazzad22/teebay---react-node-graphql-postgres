import { prisma } from "../db/prisma.js";

const createProduct = async ({ name, ownerEmail, catagories }) => {
  const createPost = await prisma.product.create({
    data: {
      name: name,
      ownerEmail: ownerEmail,
      categories: catagories,
    },
  });
  return createPost;
};

const updateProduct = async ({
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

const getAllProducts = async () => {
 const allProducts = await prisma.product.findMany()
 console.log("allProducts",allProducts)
 return allProducts
};

const getAllCatagories = async () => {
 const allcategories = await prisma.category.findMany()
 console.log("allcategories",allcategories)
 return allcategories
};

const getProductsOfUser = async ({}) => {
 const allProducts = await prisma.product.findMany()
 console.log("allProducts",allProducts)
 return allProducts
};

const deleteOneProduct = async ({id}) => {
 const allProducts = await prisma.product.delete({
  where:{
    id:id
  }
 })
 console.log("allProducts",allProducts)
 return allProducts
};


export { 
  createProduct, 
  updateProduct,
  getAllProducts,
  getProductsOfUser,
  getAllCatagories
 };
