"use client";
import { useEffect, useState } from "react";

import { Category, Product } from "../../lib/types";

import { getProductsList } from "../../lib/api/api";
import ProductItem from "@/components/ProductItem";

const ProductsPage = () => {
  const [productsList, setProductsList] = useState<Category[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      return setProductsList(await getProductsList());
    };
    fetchProducts();
  }, []);

  return (
    <section className="bg-black">
      {productsList.map((category: Category, index) => (
        <div className="px-10 mt-10" key={index}>
          <h1 className="font-semibold font-heading space-x-12 text-2xl">
            {category.name}
          </h1>
          {/* Category products */}
          <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
            <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
              {
                // List of products for each category
                category.products.map((product: Product, index) => (
                  <ProductItem key={index} product={product} />
                ))
              }
            </section>
          </section>
        </div>
      ))}
    </section>
  );
};

export default ProductsPage;
