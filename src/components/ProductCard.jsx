import React from "react";
import { star } from "../assets/icons";

export const ProductCard = ({ imgURL, price, name, stat }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {stat}
        </p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red text-xl leading-normal">
        {price}
      </p>
    </div>
  );
};
