import React from "react";
import { offer } from "../assets/images";
import { Button } from "./Button";
import { arrowRight } from "../assets/icons";

export const SpecialOffer = () => {
  return (
    <section className="flex justify-between flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="sale"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red inline-block mr-2">special </span>
          offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort. and innovation four
          you active life. Lorem, ipsum dolor sit amet consectetur adipisicing
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            bgColor="bg-white"
            borderColor=" border-salte-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
