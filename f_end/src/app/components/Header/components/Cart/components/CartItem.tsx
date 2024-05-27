"use client";

import { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";

import { useAppDispatch } from "../../../../../../lib/hooks";
import { Product } from "../../../../../../lib/types";
import { handleItem, removeItem } from "../../../../../../lib/slices/cartSlice";

interface Props {
  setShowCart: Dispatch<SetStateAction<boolean>>;
  item: Product;
}

const CartItem: FC<Props> = ({ setShowCart, item }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="flex py-6 max-w-[400px]">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={`${process.env.NEXT_PUBLIC_DEV_API_URL}${item.image}`}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-white">
            <h3>
              <Link href="/product" onClick={() => setShowCart(false)}>
                {item.name}
              </Link>
            </h3>
            <p className="ml-4">${(+item.price * item.quantity).toFixed(2)}</p>
          </div>
          <p className="flex items-center mt-2">
            {item.sizes.map((size, index) => (
              <span
                key={index}
                className={`border-2 w-[50px] flex items-center justify-center scale-[.8] rounded-lg text-gray-500 border-gray-800 ${
                  size === item.size ? "border-pink-500 text-pink-500" : ""
                }`}
              >
                {size}
              </span>
            ))}
          </p>
        </div>
        <div className="flex flex-1 gap-4 items-end justify-between text-sm mt-3">
          <div className="w-[160px] flex items-center justify-between gap-3 border-2 border-gray-800 px-2 py-1 mt-2 rounded-lg">
            <button
              disabled={item.quantity <= 1}
              onClick={() => {
                dispatch(handleItem(item, "remove"));
              }}
              className="font-medium hover:text-pink-500 active:opacity-5"
            >
              -
            </button>
            <p className="text-gray-500 flex">{item.quantity}</p>
            <button
              onClick={() => {
                dispatch(handleItem(item, "add"));
              }}
              className="font-medium hover:text-pink-500 active:opacity-5"
            >
              +
            </button>
          </div>
          <div className="flex">
            <button
              onClick={() => {
                dispatch(removeItem(item));
              }}
              type="button"
              className="font-medium text-pink-600 hover:text-pink-500 underline"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
