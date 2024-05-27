"use client";
import { useEffect, useState } from "react";
import { Product } from "../../../lib/types";
import { handleItem } from "../../../lib/slices/cartSlice";
import { useAppDispatch } from "../../../lib/hooks";
import { addWish } from "../../../lib/slices/wishlessSlice";

interface Props {
  params: {
    productId: string;
  };
}
export default function ProductPage({ params: { productId } }: Props) {
  const [item, setItem] = useState<Product>();
  const [defaultSize, setDefaultSize] = useState<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/api/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setDefaultSize(data.sizes[0]);
      });
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-black py-5 xl:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-fill"
                src={`${process.env.NEXT_PUBLIC_DEV_API_URL}${item?.image}`}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={() => {
                    dispatch(
                      handleItem({ ...item!, size: defaultSize! }, "add")
                    );
                  }}
                  className="w-full flex items-center justify-center uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 pr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <span>Add to Cart</span>
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button
                  onClick={() => {
                    dispatch(addWish({ ...item!, size: defaultSize! }));
                  }}
                  className="w-full flex items-center justify-center uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 pr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </span>
                  <span>Add to Wishlist</span>
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {item?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {item?.description_short}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:{" "}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ${item?.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:{" "}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {item?.available ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Size:
              </span>
              <div className="flex items-center mt-2">
                {item?.sizes.map((size, index) => (
                  <button
                    onClick={() => setDefaultSize(size)}
                    key={index}
                    className={`active:opacity-5 border-2 w-[50px] flex items-center justify-center scale-[.8] rounded-lg text-gray-500 border-gray-800 hover:border-pink-500 hover:text-pink-500 ${
                      size === defaultSize
                        ? "border-pink-500 text-pink-500"
                        : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {item?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
