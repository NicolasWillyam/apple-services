import React from "react";
import ServiceBanner from "./service-banner";
import { servicesList } from "@/lib/services-list";
import InfiniteCarousel from "./infinite-carousel";
import ServicesOverview from "./services-overview";

function services() {
  return (
    <>
      {servicesList.map((_, id) => (
        <div key={id}>
          <ServiceBanner service={_.service} />
          <InfiniteCarousel service={_.service.type} type={_.type} />
        </div>
      ))}
      <ServicesOverview />
    </>
  );
}

export default services;
