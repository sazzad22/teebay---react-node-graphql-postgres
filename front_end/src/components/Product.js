import React from "react";

const Product = ({product}) => {
  return (
    <div className="my-5">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="card-actions justify-end">
            <button class="btn btn-square btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p>{product?.name}</p>
          <p>product description </p>
          <p>{product?.categories}</p>
          <p>{product?.name}</p>

        </div>
      </div>
    </div>
  );
};

export default Product;
