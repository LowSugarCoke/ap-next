import { ReactNode } from "react";

export interface TwoColumnLayoutProps {
  leftColumn: ReactNode;
  rightColumn: ReactNode;
}

const TwoColumnLayout = ({ leftColumn, rightColumn }: TwoColumnLayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-16 w-full md:w-4/5 justify-center items-stretch">
      <div className="flex-1 md:w-1/2 mb-4 md:mb-0 order-1 md:order-2 md:ml-5 ">
        {rightColumn}
      </div>
      <div className="flex-1 md:w-1/2 order-2 md:order-1  md:mr-5">
        {leftColumn}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
