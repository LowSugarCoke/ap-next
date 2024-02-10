import React from "react"; // 如果你使用的是 React 17 之前的版本，需要导入 React

export interface NormalTextAreaProps {
  title: string;
  content: string[];
}

const NormalTextArea = ({ title, content }: NormalTextAreaProps) => {
  return (
    <div className="max-w-5xl mx-auto h-2/7 p-8 mt-10">
      <h1 className="font-taipei-bold my-4 text-3xl">{title}</h1>
      {content &&
        content.map((value, index) => (
          <p key={index} className="font-taipei text-left my-2 text-xl">
            &nbsp; &nbsp; &nbsp; &nbsp;{value}
          </p>
        ))}
    </div>
  );
};

export default NormalTextArea;
