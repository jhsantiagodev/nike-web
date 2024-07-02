import React from "react";
import { services } from "../constants";
import { ServicesCard } from "./ServicesCard";

export const Services = () => {
  return (
    <section className="flex justify-center flex-wrap gap-9 max-container">
      {services.map((service) => (
        <ServicesCard
          key={service.label}
          imgURL={service.imgURL}
          label={service.label}
          subText={service.subtext}
        />
      ))}
      {/*otra opcion devolver objeto completo
       key={service.label} {...service}
      } */}
    </section>
  );
};
