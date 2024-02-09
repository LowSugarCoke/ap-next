"use client";
import React from "react";
import Image from "next/image";
import "../../app/globals.css";
import { HeroSectionProps } from "./index";
import { basePath } from "../../app/config";

const NormalSection = ({
  title,
  subTitle,
  imgPath,
  className,
}: HeroSectionProps) => {
  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row items-center justify-between py-0 px-4 md:px-0 order-2">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <div className="p-16  shadow-lg relative left-20 bg-white bg-opacity-75 rounded-lg">
            <h1 className="text-5xl font-bold mb-4 font-taipei-bold text-black">
              {title}
            </h1>
            <p className="text-xl mb-8 font-taipei text-black">
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
        <div className="md:w-1/2 h-screen overflow-hidden">
          <Image
            src={`${basePath}${imgPath}`}
            alt="Hero"
            className="h-full w-full rounded-bl-[150px] shadow-lg object-cover "
            width={640}
            height={640}
          />
        </div>
      </div>
    </div>
  );
};

export default NormalSection;
