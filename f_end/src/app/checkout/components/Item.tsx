import Image from "next/image";
import { FC } from "react";

export interface ItemCheckoutProps {
  image: string;
  name: string;
  size: string;
  price: string;
  description: string;
  quantity: number;
  index: number;
  removeElement: (index: number) => void;
}

const ItemCheckout: FC<ItemCheckoutProps> = ({
  image,
  name,
  size,
  price,
  description,
  quantity,
  index,
  removeElement,
}) => {
  return (
    <li className="flex gap-3 w-full h-auto max-sm:flex-col max-sm:items-center">
      <Image
        src={`${process.env.NEXT_PUBLIC_DEV_API_URL}${image}`}
        alt="shirt"
        width={350}
        height={350}
        className="bg-gray-700 sm:max-w-[250px] w-full  h-full max-sm:w-full"
      />
      <div className=" flex flex-col justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-sm mb-1 text-gray-400">Size: {size}</span>
          <span className="text-sm mb-1 text-gray-400">
            Quantity: {quantity}
          </span>
          <p className="text-sm text-gray-500 max-w-[638px] mt-3">
            {description}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={() => removeElement(index)}
            className="font-medium text-pink-600 hover:text-pink-500 underline"
          >
            Remove
          </button>
          <span>${price}</span>
        </div>
      </div>
    </li>
  );
};

export default ItemCheckout;
