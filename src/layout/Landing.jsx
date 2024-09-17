import React from "react";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

export const Landing = () => {
  return (
    <>
      <header className="h-[74px]  ">
        <div
          className="w-full h-full "
          style={{ background: `url('/header-base.png') ` }}
        >
          <div
            className="flex items-center justify-center h-full w-full"
            style={{
              background: `url('/image 17.png') `,
              boxShadow: `0px 2px 4px 0px #134358`,
            }}
          >
            <h2 className="text-center  text-white font-extrabold text-2xl tracking-widest   ">
              Black Friday Sale<br className="block md:hidden"/> Save $100
            </h2>
          </div>
        </div>
      </header>
      <Nav />
      <Hero />

      <Footer />
    </>
  );
};

//
