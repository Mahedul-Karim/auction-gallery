import React from "react";
import Container from "../util/Container";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/Banner-min.jpg')] bg-cover bg-no-repeat sm:h-[450px] h-[350px] flex flex-col justify-center bg-center">
      <Container className="space-y-4">
        <h1 className="text-white font-semibold text-2xl sm:text-4xl leading-[1.4]">
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p className="text-white/[0.8] font-light sm:text-base text-sm">
          Discover rare collectibles, luxury goods, and vintage <br />
          treasures in our curated auctions
        </p>
        <div>
          <button className="btn btn-wide btn-circle shadow-none">
            Explore Auctions
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
