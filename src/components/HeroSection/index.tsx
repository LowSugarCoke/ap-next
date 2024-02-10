import React from "react";
import "../../app/globals.css";
import NormalSection from "./ＮormalSection";
import MobileSection from "./MobileSection";

export interface HeroSectionProps {
  title: string;
  subTitle: string[];
  imgPath: string;
  className?: string;
}

const HeroSection = ({ title, subTitle, imgPath }: HeroSectionProps) => {
  return (
    <div className="w-full h-full animate-fade-in-down">
      <NormalSection
        className="hidden lg:block"
        title={title}
        subTitle={subTitle}
        imgPath={imgPath}
      />

      <MobileSection
        className="block lg:hidden animate-fade-in-down"
        title={title}
        subTitle={subTitle}
        imgPath={imgPath}
      />
    </div>
  );
};

export default HeroSection;
