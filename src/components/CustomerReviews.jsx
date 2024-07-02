import React from "react";
import { reviews } from "../constants";
import { CardReview } from "./CardReview";

export const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red mx-2">Customers</span>
        say?
      </h3>
      <p className="info-text m-auto mt-4 text-center max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        consequuntur? Consequuntur vitae cumque optio, quis repudiandae.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <CardReview key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};
