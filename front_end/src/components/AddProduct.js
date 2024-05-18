import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const addProduct = gql`
  mutation CreateProduct(
    $name: String!
    $ownerEmail: String!
    $catagories: [String]
  ) {
    createProduct(
      name: $name
      ownerEmail: $ownerEmail
      catagories: $catagories
    ) {
      id
      createdAt
      updatedAt
      name
      ownerEmail
      bought
      sold
      rented
      categories
    }
  }
`;

const AddProduct = () => {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [runAddProduct, { loading, error, data }] = useMutation(addProduct);

  if (loading) return <Loading></Loading>;

  if (error) return <p>could not add product</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await runAddProduct({ variables: { name: productName, ownerEmail } });
    if (data?.createProduct) {
      console.log("create product data", data);
      navigate("/all-products");
    }
  };


  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg font-bold mb-6">Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Email"
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </form>
          {/* <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-800">
            Signup
          </a>
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
