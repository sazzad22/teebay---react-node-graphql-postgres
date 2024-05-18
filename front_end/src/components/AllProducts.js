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
  const products = [
    {
      name: "iPhone 13 pro max",
      category: "Electronics",
      price: 1300,
      description:
        "Lorem in hac habitasse platea dictumst. Sed at tempus risus. Sed at perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
      date: "21st Sep 2021",
      id: "1023934712",
    },
    {
      name: "iPhone 13 pro slightly broken",
      category: "Electronics",
      price: 700,
      description:
        "Lorem in hac habitasse platea dictumst. Sed at perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
      date: "21st Sep 2018",
    },
  ];

  

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
