"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";

import Cart from "./components/Cart/Cart";
import Auth from "./components/Auth";
import { useAppSelector } from "../../../lib/hooks";
import { usePathname } from 'next/navigation'


const Header: FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [burger, setShowBurger] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const total = useAppSelector((state) => state.cart.total);
  const token = useAppSelector((state) => state.token.value);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);


	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
      
			if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowBurger(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [setShowBurger]);

  return (
    <div className="z-40 sticky top-0 flex flex-wrap place-items-center overflow-hidden">
      <section className="relative mx-auto">
        {/* <!-- navbar --> */}
        <nav className="flex justify-between bg-black text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link className="text-3xl font-bold font-heading" href="/">
              {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
              
            </Link>
            {/* <!-- Nav Links --> */}
            <div className="flex flex-1 items-center max-md:justify-end">
              {/* Background backdrop */}
              {burger && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>}
              <div ref={ref} className={`${burger ? "max-md:fixed" : "max-md:hidden"} z-40 max-md:bg-black max-md:top-0 max-md:right-0 flex flex-1 max-md:h-screen max-md:w-[250px] max-md:items-center`}>
                <div className="md:hidden ml-3 flex h-7 items-center absolute top-5 right-5">
                  <button
                    type="button"
                    className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setShowBurger(false)}
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
                <ul className="flex h-auto px-4 mx-auto font-semibold font-heading md:space-x-6 lg:space-x-12
                max-md:flex-col max-md:gap-6 max-md:items-center
                ">
                  <li>
                    <Link onClick={() => setShowBurger(false)} className={`${pathname === "/" ? "text-pink-500 underline" : "hover:text-gray-200"} hover:text-pink-500`} href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setShowBurger(false)} className={`${pathname === "/products" ? "text-pink-500 underline" : "hover:text-gray-200"} hover:text-pink-500`} href="/products">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setShowBurger(false)} className={`${pathname === "/about" ? "text-pink-500 underline" : "hover:text-gray-200"} hover:text-pink-500`} href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setShowBurger(false)} className={`${pathname === "/contact" ? "text-pink-500 underline" : "hover:text-gray-200"} hover:text-pink-500`} href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- Header Icons --> */}
              <div className="flex items-center md:space-x-5 max-md:space-x-2">

                {/* Button open wishlist */}
                <Link className="hover:text-gray-200" href="/wishlist">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                </Link>

                {/* Button open/close cart */}
                <button className="flex items-center hover:text-gray-200" onClick={() => setShowCart(!showCart)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                  {cartItems.length > 0 && (
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                    </span>
                  )}
                </button>

                {/* Button open auth */}
                <Auth token={token} />

                {/* Icon burger */}
                <a onClick={() => setShowBurger(true)} className="navbar-burger self-center md:hidden" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </nav>

        {/* Background && content cart */}
        <Cart
          cartItems={cartItems}
          total={total}
          showCart={showCart}
          setShowCart={setShowCart}
        />
      </section>
    </div>
  );
};

export default Header;
