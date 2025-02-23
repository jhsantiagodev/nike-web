import React, { useState } from "react";
import { Button } from "./Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import { ShoeCard } from "./ShoeCard";

export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold capitalize">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new arrival
          </span>
          <br />
          <span className=" text-coral-red inline-block mt-3 mr-2">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort. and innovation four
          you active life.
        </p>

        <Button label="Show Now" iconUrl={arrowRight} />

        <div className="flex flex-wrap justify-start items-start w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-16 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {/*Variable que contiene las imagenes en constants */}
          {shoes.map((shoe) => (
            <div key={shoe.id}>
              <ShoeCard
                imgUrl={shoe}
                changeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
