"use client";

import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import Link from "next/link";

import CartItem from "./components/CartItem";
import EmptyCart from "./components/EmptyCart";
import { Product } from "../../../../../lib/types";

export interface Props {
  cartItems: Product[];
  showCart: boolean;
  total: number;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Cart: FC<Props> = ({ cartItems, total, showCart, setShowCart }) => {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setShowCart(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [setShowCart]);

  return (
    <div
      className={`relative z-10 ${
        showCart ? "block" : "hidden"
      } transition-all`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Background backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div className="fixed inset-0 overflow-hidden">
				<div className="absolute inset-0 overflow-hidden">
					<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-10">
						{/* Slide-over panel */}
						<div ref={ref} className="pointer-events-auto w-screen max-w-md">
							<div className="flex h-full flex-col bg-black shadow-xl">
								<div className="flex-1  px-4 py-6 sm:px-6">
									<div className="flex items-start justify-between flex-center">
										{/* Title */}
										<h2 className="text-lg font-medium text-white" id="slide-over-title">
											Shopping cart
										</h2>
										{/* Button close */}
										<div className="ml-3 flex h-7 items-center">
											<button
												type="button"
												className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
												onClick={() => setShowCart(false)}
											>
												<span className="absolute -inset-0.5"></span>
												<span className="sr-only">Close panel</span>
												<svg
													className="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
												</svg>
											</button>
										</div>
									</div>
									{/* Content cart items */}
									<div className="flex flex-col justify-center items-center h-[calc(100vh-50px)]">
										{cartItems.length > 0 ? (
											// Show the cart items if there are any
											<>
												<div className="mt-8 overflow-y-auto p-5 flex-1">
													<div className="flow-root">
														<ul role="list" className="-my-6 divide-y divide-gray-200">
															{/* Map through the cart items */}
															{cartItems.map((item: Product) => (
																<CartItem item={item} setShowCart={setShowCart} key={item.id} />
															))}
														</ul>
													</div>
												</div>
												{/* Section for subtotal */}
												<div className="border-t border-gray-200 px-4 py-6 sm:px-6 w-full h-[213px]">
													<div className="flex justify-between text-base font-medium text-white">
														<p>Subtotal</p>
														<p>${total}</p>
													</div>
													<p className="mt-0.5 text-sm text-gray-500">
														Shipping and taxes calculated at checkout.
													</p>
													<div className="mt-6">
														<Link
														onClick={() => setShowCart(false)}
															href="/checkout"
															className="flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-700"
														>
															Checkout
														</Link>
													</div>
													<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
														<p>
															or{" "}
															<button
																type="button"
																className="font-medium text-pink-600 hover:text-pink-500"
															>
																Continue Shopping
																<span aria-hidden="true"> &rarr;</span>
															</button>
														</p>
													</div>
												</div>
											</>
										) : (
											// Empty cart component
											<EmptyCart showCart={showCart} setShowCart={setShowCart} />
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
