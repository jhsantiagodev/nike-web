import React from "react";

export const ServicesCard = ({ imgURL, label, subText }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
        <img src={imgURL} alt="image" width={24} height={24} />
      </div>

      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>

      <p className="mt-3 font-montserrat text-lg leading-normal text-slate-gray break-words">
        {subText}
      </p>
    </div>
  );
};
