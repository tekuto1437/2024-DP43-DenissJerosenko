import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const EmptyCart: FC<Props> = ({ setShowCart }) => {
  return (
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
          <h3 className="mt-4 text-lg font-medium text-white">
            Your cart is empty
          </h3>
          <p>There are currently no products in the shopping cart</p>
          <button
            onClick={() => setShowCart(false)}
            type="button"
            className="font-medium text-pink-600 hover:text-pink-500 mt-5"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;