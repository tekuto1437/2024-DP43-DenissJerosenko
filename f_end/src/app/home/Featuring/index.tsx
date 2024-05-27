"use client";
import { useEffect, useState } from "react";

import { Product } from "../../../lib/types";
import ProductItem from "@/components/ProductItem";

const FeaturingSection = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/api/product-featuring/`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="mx-auto max-w-2xl py-2 lg:max-w-7xl">
      <h2 className="text-white text-2xl text-center pb-4">
        Featuring Products
      </h2>

      <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
        {items.map((item: Product, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturingSection;
