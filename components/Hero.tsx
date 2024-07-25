import Image from "next/image";
import React from "react";

interface HeroProps{
    title:string,
    description?:string,
    image:string,
    image2:string
}

const Hero = ({title, description, image, image2}:HeroProps) => {
  return (
    <section className="relative h-full overflow-hidden">
      <div
        className="absolute top-0 left-0 
        w-full h-full bg-cover"
        style={{ backgroundImage: `url('/slider/${image2}')` }}
      ></div>
      <div
        className="absulate top-0 left-0 
        w-full h-full bg-black bg-opacity-40"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10">
          <div className="lg:w-1/2 ml-4">
            <h2 className="text-sxl text-white">{title}</h2>
            <p className="text-white mt-2">{description}</p>
          </div>
          <div className="lg:w-1/2">
            <Image src={`/slider/${image}`} alt="" width={500} height={500}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
