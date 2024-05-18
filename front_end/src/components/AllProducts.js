import React from "react";
import Header from "./Header";
import Product from "./Product";
import { gql, useQuery } from "@apollo/client";

const GET_DOGS = gql`
  query GetAllProducts {
    getAllProducts {
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

const AllProducts = () => {
  const GET_ALL_PRODUCTS = gql`
    query GetAllProducts {
      getAllProducts {
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
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error! {error.message}</h3>;
  if (data?.getAllProducts) {
    console.log(data.getAllProducts);
  }


  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <p>.</p>
      <p>.</p>

      <div className="mt-20 flex justify-center">
        <div className=" mx-5 ">
          <h1>ALL PRODUCTS</h1>

          <div>
            {data?.getAllProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default AllProducts;
