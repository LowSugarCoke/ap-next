import React from "react";
import Image from "next/image";

export interface TeacherCardProps {
  name: string;
  imageUrl: string;
  major: string;
  experience: string[];
}

const TeacherCard = ({
  name,
  imageUrl,
  major,
  experience,
}: TeacherCardProps) => {
  return (
    <div className="w-4/5 max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-10">
        <Image
          src={imageUrl ? imageUrl : ""}
          alt="Icon"
          width={128}
          height={128}
          layout="fixed"
        />

        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {major}
        </span>

        {experience.map((item, index) => (
          <span
            key={index}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TeacherCard;
