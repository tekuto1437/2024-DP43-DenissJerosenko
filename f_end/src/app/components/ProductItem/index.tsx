"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Product } from "../../../lib/types";
import {
  ItemWishless,
  addWish,
  remWish,
} from "../../../lib/slices/wishlessSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { handleItem } from "../../../lib/slices/cartSlice";

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [size, setSize] = useState(product.sizes[0]);
  const wishless = useAppSelector((state) =>
    state.wishless.elements.find((item: ItemWishless) => item.id === product.id)
  );
  const dispatch = useAppDispatch();

  const addWishProduct = () => {
    wishless
      ? dispatch(remWish({ ...product, size, wishless: false }))
      : dispatch(addWish({ ...product, size, wishless: true }));
  };

  return (
    <section className="relative min-h-[698px] py-10 rounded-lg bg-transparent border-transparent border-2 hover:border-pink-500 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
      <button
        onClick={addWishProduct}
        className="absolute top-3 right-3 p-2 rounded-lg border-transparent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 hover:fill-pink-400 hover:text-pink-400 ${
            wishless && "text-pink-500 fill-pink-500"
          }`}
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
      </button>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 flex justify-center">
        <Link href={`/product/${product.id}`}>
          <Image
            className="h-80 w-72 object-contain object-center group-hover:opacity-75"
            src={`${process.env.NEXT_PUBLIC_DEV_API_URL}${product.image}`}
            alt={product.name}
            width={300}
            height={300}
          />
        </Link>
      </div>
      <h1 className="text-3xl my-5 mt-10">
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </h1>
      <p className="mb-5 p-1">
        {showDescription
          ? product.description_short
          : `${product.description_short.substring(0, 100)} ...`}
        <button
          onClick={() => setShowDescription(!showDescription)}
          className="text-pink-200 hover:text-pink-500 underline mt-1"
        >
          {showDescription ? "Show less" : "Show more"}
        </button>
      </p>
      <h2 className="font-semibold mb-5">${product.price}</h2>
      <div className="flex justify-center -mx-2 mb-4">
        <div className="flex justify-between items-center mt-5">
          <button
            onClick={() => {
              dispatch(handleItem({ ...product, size }, "add"));
            }}
            className="w-full flex items-center justify-center uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
          >
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
            <span>Add to Cart</span>
          </button>

          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="bg-gray-800 border-2 border-gray-800 rounded-lg py-2 px-1 text-md cursor-pointer uppercase hover:bg-gray-700 hover:border-gray-700 h-[43.2px]"
          >
            {product.sizes.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
