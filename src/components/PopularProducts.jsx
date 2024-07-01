import React from "react";
import { products } from "../constants";
import { ProductCard } from "./ProductCard";

export const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Prodructs
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat">
          Experience top-nothc quality and style with our sought-aferte
          selections. Discovery a world of comfort, desing and value.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-14">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};
