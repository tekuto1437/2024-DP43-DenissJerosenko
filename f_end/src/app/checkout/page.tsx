"use client";

import { useEffect, useState } from "react";

import ItemCheckout, { ItemCheckoutProps } from "./components/Item";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { remAllItems, removeItem } from "../../lib/slices/cartSlice";
import { PayPalButton } from "react-paypal-button-v2";
import { useRouter } from "next/navigation";
import { Product } from "../../lib/types";



const Checkout = () => {
	const [items, setItems] = useState(useAppSelector((state) => state.cart.items) || []);
	const [scriptLoaded, setScriptLoaded] = useState(false);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
  const total = useAppSelector((state) => state.cart.total);
	const dispatch = useAppDispatch();
	const router = useRouter();

	useEffect(() => {
		const addPaypalScript = () => {
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`;
			script.async = true;

			script.onload = () => setScriptLoaded(true);

			document.body.appendChild(script);
		};
		addPaypalScript();

	}, []);

	return (
		<div className="flex flex-col gap-4 max-xl:px-5 xl:px-12 mt-5 mx-auto h-full">
			<div className="flex flex-col gap-1">
				<h2 className="text-xl font-semibold">Order Summary</h2>
				<p className="text-sm text-gray-600">Check your items. And select a suitable shipping method.</p>
			</div>
			{
				items.length > 0 ? (
					<div className="flex gap-2 max-xl:flex-col h-auto max-xl:gap-10">
						<ul className="xl:w-2/3 flex gap-10 flex-col mt-5">
							{
								items.map((item: Product, index: number) => (
									<ItemCheckout key={index} removeElement={() => { setItems(items.filter((_: ItemCheckoutProps, i: number) => i !== index)); dispatch(removeItem(item)) }} index={index} name={item.name} size={item.size} price={item.price} description={item.description} image={item.image} quantity={item.quantity} />
								))
							}
						</ul>
						<div className=" xl:w-1/3 xl:border-l-2 border-pink-500 max-xl:max-w-[795px]">
							<form className="px-4 flex flex-col gap-2 mt-5 mb-5">
								<div>
									<label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
									<input value={name} onChange={(e) => setName(e.target.value)} type="text" id="first_name" className="placeholder-white outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-pink-500 dark:text-white" placeholder="Write your name" required />
								</div>
								<div>
									<label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
									<input value={phone} onChange={(e) => setPhone(e.target.value)} type="string" id="phone" className="placeholder-white outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-pink-500 dark:text-white" placeholder="Write your phone number" required />
								</div>
								<div>
									<label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write your address</label>
									<input value={address} onChange={(e) => setAddress(e.target.value)} type="text" id="address" className="placeholder-white outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-pink-500 dark:text-white" placeholder="Write your home address" required />
								</div>
							</form>
							<div className=" px-4 py-6 sm:px-6 w-full h-full">
								<div className="flex justify-between text-base font-medium text-white">
									<p>Subtotal</p>
									<p>${total}</p>
								</div>
								<p className="mt-0.5 text-sm text-gray-500">
									Shipping and taxes calculated at checkout.
								</p>
								<div className="mt-6">
									{scriptLoaded ? (
										<PayPalButton
											amount={total}
											onSuccess={() => {
												if (name.length > 0 && phone.length > 0 && address.length > 0) {
													fetch("http://127.0.0.1:8000/api/cart/", {
														method: "POST",
														headers: {
															"Content-Type": "application/json",
														},
														body: JSON.stringify({
															form: {
																name: name,
																phone: phone
															},
															address: address,
															items: items,
															total: total
														})
													}).then((response) => {
														if (response.ok) {
															dispatch(remAllItems());
															setItems([])
														}
													})
												}
											}}
										/>
									) : null}
								</div>
							</div>
						</div>
					</div>
				) : (<div className="w-full h-[350px] flex items-center justify-center">
					<div className="flex flex-col items-center justify-center opacity-90">
						<div className="w-[150px] h-[150px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="100%"
								height="100%"
								fill="none"
								viewBox="0 0 800 800"
							>
								<path
									fill="#EC4899"
									d="M515.625 80.625L398.75 140 275.625 76.875 25 226.25l116.25 66.875V570l257.5-136.875L652.5 570V293.125L775 222.5 515.625 80.625z"
								></path>
								<path
									fill="#fff"
									d="M141.25 576.25c-1.25 0-2.5 0-3.125-.625C136.25 574.375 135 572.5 135 570V296.25l-113.125-65c-1.875-.625-3.125-3.125-3.125-5s1.25-4.375 3.125-5.625L272.5 71.25a5.677 5.677 0 016.25 0l120.625 61.875L512.5 75c1.875-1.25 3.75-.625 5.625 0L777.5 216.875c1.875 1.25 3.125 3.125 3.125 5.625s-1.25 4.375-3.125 5.625l-119.375 68.75v273.75c0 2.5-1.25 4.375-3.125 5.625a5.677 5.677 0 01-6.25 0L398.75 440 144.375 575.625c-1.25.625-1.875.625-3.125.625zm-103.75-350l106.875 61.25c1.875 1.25 3.125 3.125 3.125 5.625V560l248.125-132.5c1.875-1.25 4.375-1.25 5.625 0L645.625 560V293.125c0-2.5 1.25-4.375 3.125-5.625l113.75-65L515 88.125l-108.75 55c0 .625-.625.625-.625 1.25-1.875 3.125-5.625 3.75-8.75 1.875l-1.25-1.25H395L275.625 83.75 37.5 226.25z"
								></path>
								<path
									fill="#AC1861"
									d="M398.75 140L652.5 293.125V570L398.75 433.125V140zM398.75 140l-257.5 153.125V570l257.5-136.875V140z"
								></path>
								<path
									fill="#fff"
									d="M652.5 576.25c-1.25 0-1.875 0-3.125-.625l-253.75-137.5c-1.875-1.25-3.125-3.125-3.125-5.625V140c0-2.5 1.25-4.375 3.125-5.625a5.677 5.677 0 016.25 0L655.625 287.5c1.875 1.25 3.125 3.125 3.125 5.625v277.5c0 2.5-1.25 4.375-3.125 5.625H652.5zM405 429.375L646.25 560V296.25L405 151.25v278.125z"
								></path>
								<path
									fill="#fff"
									d="M141.25 576.25c-1.25 0-2.5 0-3.125-.625C136.25 574.375 135 572.5 135 570V293.125c0-2.5 1.25-4.375 3.125-5.625l257.5-153.125a5.677 5.677 0 016.25 0C403.75 135.625 405 137.5 405 140v293.125c0 2.5-1.25 4.375-3.125 5.625l-257.5 137.5h-3.125zm6.25-280V560l245-130.625V151.25l-245 145z"
								></path>
								<path
									fill="#D73B88"
									d="M398.75 430l-108.125-42.5-149.375-95V570l257.5 153.125L652.5 570V292.5l-114.375 85L398.75 430z"
								></path>
								<path
									fill="#fff"
									d="M398.75 729.375c-1.25 0-2.5 0-3.125-.625l-257.5-153.125C136.25 574.375 135 572.5 135 570V292.5c0-2.5 1.25-4.375 3.125-5.625a5.677 5.677 0 016.25 0l149.375 95 105.625 41.875 136.25-51.875L648.75 287.5c1.875-1.25 4.375-1.875 6.25-.625s3.125 3.125 3.125 5.625V570c0 2.5-1.25 4.375-3.125 5.625L401.25 728.75s-1.25.625-2.5.625zm-251.25-162.5L398.75 716.25l247.5-149.375V305l-104.375 77.5c-.625.625-1.25.625-1.25.625L401.25 436.25c-1.25.625-3.125.625-4.375 0l-108.125-42.5c-.625 0-.625-.625-1.25-.625l-140-88.75v262.5z"
								></path>
								<path
									fill="#AC1861"
									d="M398.75 723.125L652.5 570V292.5L520 386.875 398.75 430v293.125z"
								></path>
								<path
									fill="#fff"
									d="M398.75 729.375c-1.25 0-1.875 0-3.125-.625-1.875-1.25-3.125-3.125-3.125-5.625V430c0-2.5 1.875-5 4.375-5.625L517.5 381.25l131.25-93.75c1.875-1.25 4.375-1.25 6.25-.625 1.875 1.25 3.125 3.125 3.125 5.625V570c0 2.5-1.25 4.375-3.125 5.625L401.25 728.75s-1.25.625-2.5.625zm6.25-295v277.5l241.25-145V305l-122.5 86.875c-.625.625-1.25.625-1.25.625L405 434.375z"
								></path>
								<path
									fill="#AC1861"
									d="M197.5 471.875l201.25 113.75V430l-115-38.75-142.5-98.75 56.25 179.375z"
								></path>
								<path
									fill="#EC4899"
									d="M25 359.375L141.25 292.5 398.75 430 275 500.625 25 359.375z"
								></path>
								<path
									fill="#AC1861"
									d="M515 541.875l137.5-70.625V293.125l-111.875 82.5-140 53.125-1.875 1.25L515 541.875z"
								></path>
								<path
									fill="#EC4899"
									d="M398.75 430L515 496.875l260-133.75-122.5-70L398.75 430z"
								></path>
								<path
									fill="#fff"
									d="M275 506.875c-1.25 0-1.875 0-3.125-.625L21.875 365c-1.875-1.25-3.125-3.125-3.125-5.625S20 355 21.875 353.75l116.25-66.25a5.677 5.677 0 016.25 0l257.5 137.5c1.875 1.25 3.125 3.125 3.125 5.625s-1.25 4.375-3.125 5.625l-123.75 70c-.625.625-1.875.625-3.125.625zm-237.5-147.5L275 493.75l110.625-63.125L141.25 300 37.5 359.375z"
								></path>
								<path
									fill="#fff"
									d="M515 503.125c-1.25 0-1.875 0-3.125-.625l-116.25-66.875c-1.875-1.25-3.125-3.125-3.125-5.625s1.25-4.375 3.125-5.625l253.75-137.5a5.677 5.677 0 016.25 0l122.5 70.625c1.875 1.25 3.125 3.125 3.125 5.625s-1.25 4.375-3.125 5.625l-260 133.75c-1.25.625-1.875.625-3.125.625zM411.875 430l103.75 59.375L762.5 362.5 651.875 300l-240 130z"
								></path>
							</svg>
						</div>

						<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
							<div className="flex flex-col">
								<h3 className="mt-4 text-lg font-medium text-white">Your cart is empty</h3>
								<p>
									There are currently no products in the shopping cart
								</p>
								<button
								onClick={() => router.push('/products')}
									type="button"
									className="font-medium text-pink-600 hover:text-pink-500 mt-5"
								>
									Continue Shopping
									<span aria-hidden="true"> &rarr;</span>
								</button>
							</div>
						</div>
					</div>
				</div>)
			}
		</div>
	);
};

export default Checkout;
