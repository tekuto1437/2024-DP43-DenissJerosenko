"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Product } from "../../../lib/types";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { handleItem } from "../../../lib/slices/cartSlice";
import { ItemWishless, remWish } from "../../../lib/slices/wishlessSlice";

interface Props {
  product: Product;
}

const WishListProduct: FC<Props> = ({ product }) => {
  const [show, setshow] = useState(false);
  const [defaultSize, setDefaultSize] = useState(product.size);
  const [favorite, setFavorite] = useState(
    useAppSelector((state) =>
      state.wishless.elements.find(
        (item: ItemWishless) => item.id === product.id
      )
    )
  );

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col p-10 border-2 border-transparent rounded-lg hover:border-pink-500">
      <div className="relative">
        <Link href={`/product/${product.id}`}>
          <Image
            className="h-80 w-72 object-contain object-center group-hover:opacity-75"
            src={`${process.env.NEXT_PUBLIC_DEV_API_URL}${product.image}`}
            alt={product.name}
            width={300}
            height={300}
          />
        </Link>
        <button
          onClick={() => {
            dispatch(remWish({ ...product, id: product.id }));
            setFavorite(!favorite);
          }}
          className="absolute top-[-20px] right-[-20px] p-2 rounded-lg border-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-gray-900 hover:text-pink-400 ${
              favorite && "text-pink-500 fill-pink-500"
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
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-100">
            <Link href={`/product/${product.id}`}>{product.name}</Link>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button
            aria-label="show menu"
            onClick={() => setshow(!show)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 py-2.5 px-2 bg-gray-900 text-white hover:text-gray-400"
          >
            <svg
              className={`fill-stroke ${show ? "block" : "hidden"}`}
              width={10}
              height={6}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L5 1L1 5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`fill-stroke ${show ? "hidden" : "block"}`}
              width={10}
              height={6}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="menu1"
        className={` flex-col jusitfy-start items-start mt-12 ${
          show ? "flex" : "hidden"
        }`}
      >
        <div className="mt-2">
          <p className="tracking-tight text-base font-medium leading-4 text-gray-100">
            Current sizes
          </p>
        </div>
        <div className="mt-2 flex">
          {product.sizes.map((size: string, index: number) => (
            <button
              onClick={() => setDefaultSize(size)}
              key={index}
              className={`active:opacity-5 border-2 w-[50px] flex items-center justify-center scale-[.8] rounded-lg text-gray-500 border-gray-800 hover:border-pink-500 hover:text-pink-500 ${
                size === defaultSize ? "border-pink-500 text-pink-500" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        <Link href={`/product/${product.id}`}>
          <button
            type="button"
            className=" mt-6 font-medium text-pink-600 hover:text-pink-500"
          >
            Read more about the product<span aria-hidden="true"> →</span>
          </button>
        </Link>
        <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full  space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
          <div className="flex-1">
            <p className="tracking-tight font-medium leading-4 text-gray-200 text-lg">
              ${product.price}
            </p>
          </div>
          <div className="w-[170px]">
            <button
              onClick={() => {
                const setItem = {
                  ...product,
                  quantity: 1,
                  size: defaultSize,
                };
                dispatch(handleItem(setItem, "add"));
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
                  ></path>
                </svg>
              </span>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListProduct;
