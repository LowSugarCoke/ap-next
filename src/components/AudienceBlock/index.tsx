import React from "react";
import Image from "next/image";

export interface AudienceBlockProps {
  title: string;
  description: string[];
  learnings: { icon: string; iconPath?: string }[];
  className?: string;
}

const AudienceBlock = ({
  title,
  description,
  learnings,
  className,
}: AudienceBlockProps) => {
  return (
    <div
      className={`bg-white p-6 max-w-md mx-auto rounded-xl shadow-md flex flex-col space-y-4 ${className}`}
    >
      <div className="flex flex-col space-y-2">
        <div className="text-lg font-medium font-taipei">{title}</div>
        {description.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        {learnings.map((learning, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
          >
            <div className="flex-shrink-0">
              <Image
                src={learning.iconPath ? learning.iconPath : ""}
                alt="Icon"
                width={16}
                height={16}
                layout="fixed"
              />
            </div>
            {learning.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudienceBlock;
