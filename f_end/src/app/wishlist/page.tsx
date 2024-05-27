"use client";
import Link from "next/link";

import { useAppSelector } from "../../lib/hooks";
import { Product } from "../../lib/types";
import WishListProduct from "./components/WishListProduct";

export default function Wishlist() {
  const products = useAppSelector((state) => state.wishless.elements);
  const FavoritesLength = products.length;
  return (
    <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
      <div className="flex flex-col jusitfy-start items-start">
        <div>
          <Link
            href="/"
            className="text-sm leading-4 text-gray-600 hover:text-white hover:underline"
          >
            Home
          </Link>
        </div>
        <div className="mt-3">
          <h1 className="font-semibold font-heading space-x-12 text-4xl">
            Wishlist
          </h1>
        </div>
        <div className="mt-4">
          <p className="font-semibold font-heading space-x-12 text-2xl text-gray-500">
            {FavoritesLength} items
          </p>
        </div>
        <div className=" mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-8">
          {products.map((product: Product, index: number) => (
            <WishListProduct product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
