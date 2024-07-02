import React from "react";
import { Button } from "./Button";
import { shoe8 } from "../assets/images";

export const SuperQuality = () => {
  return (
    <section className="w-full flex justify-between items-center max-lg:flex-col gap-10 max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We provide you
          <span className=" text-coral-red inline-block mx-2">super </span>
          <span className=" text-coral-red inline-block mr-2">quality</span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort. and innovation four
          you active life.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          className="object-contain"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};
