import React from "react";
import "../../app/globals.css";
import NormalSection from "./ＮormalSection";
import MobileSection from "./MobileSection";

export interface HeroSectionProps {
  title: string;
  subTitle: string;
  content: string[];
  imgPath: string;
  className?: string;
}

const HeroSection = ({
  title,
  subTitle,
  content,
  imgPath,
}: HeroSectionProps) => {
  return (
    <div className="w-full h-full animate-fade-in-down">
      <NormalSection
        className="hidden lg:block"
        title={title}
        subTitle={subTitle}
        content={content}
        imgPath={imgPath}
      />

      <MobileSection
        className="block lg:hidden animate-fade-in-down"
        title={title}
        subTitle={subTitle}
        content={content}
        imgPath={imgPath}
      />
    </div>
  );
};

export default HeroSection;
