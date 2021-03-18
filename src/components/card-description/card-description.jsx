import React from "react";
import CarInfo from "../car-info/car-info";
import Gallery from "../gallery/gallery";
import Tabs from "../tabs/tabs";

const CardDescription = () => {
  return (
    <section className="page-content__card-description card-description">
      <div className="card-description__wrapper">
        <Gallery />
        <CarInfo />
      </div>

      <Tabs />
    </section>
  );
};

export default CardDescription;
