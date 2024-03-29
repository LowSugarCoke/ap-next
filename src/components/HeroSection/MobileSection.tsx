import React from "react";
import Image from "next/image";
import "../../app/globals.css";
import { HeroSectionProps } from ".";
import { basePath } from "../../app/config";

const MobileSection = ({
  title,
  subTitle,
  imgPath,
  className,
}: HeroSectionProps) => {
  return (
    <div className={`${className} `}>
      <div className="relative order-2 w-full min-h-screen overflow-hidden h-full">
        <Image
          src={`${basePath}${imgPath}`}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="shadow-lg z-0"
        />

        <div className="absolute left-1/2 top-1/2 w-4/5 h-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center justify-center p-10 bg-white bg-opacity-75 rounded-lg">
          <h1 className="text-4xl  font-bold mb-4 mt-6 text-black">{title}</h1>
          <p className="text-md md:text-xl mb-8 text-black">
            {subTitle &&
              subTitle.map((item, index) => (
                <React.Fragment key={index}>
                  <br />
                  {item}
                </React.Fragment>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
