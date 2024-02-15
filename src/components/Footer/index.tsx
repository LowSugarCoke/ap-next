import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { basePath } from "@/app/config";

const Footer = () => {
  return (
    <footer className=" text-gray-600 body-font w-2/3  ">
      <div className="container px-12 pt-24 mx-auto ">
        <div className="flex flex-wrap md:items-center lg:items-start md:flex-row md:flex-nowrap ">
          <div className="w-1/2 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="mt-3 justify-center flex  md:flex-row md:justify-start ">
              <a
                href="https://line.me/ti/p/~approgramming"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mr-3 "
              >
                <Image
                  src={`${basePath}/footer/line.png`}
                  alt="Line"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://www.facebook.com/APprogramming/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mr-3"
              >
                <Image
                  src={`${basePath}/footer/facebook.png`}
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </a>
            </div>
            <div className="mt-5">
              <Typography
                as="a"
                color="blue-gray"
                className="font-normal transition-colors  focus:text-blue-500 font-taipei"
                placeholder={undefined}
              >
                電話: 0908-632710
              </Typography>
            </div>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-end ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4  ">
              <h1 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3 font-taipei">
                關於
              </h1>
              <nav className="list-none mb-10">
                <ul>
                  <li>
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 font-taipei"
                      placeholder={undefined}
                    >
                      關於我們
                    </Typography>
                  </li>

                  <li>
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 font-taipei"
                      placeholder={undefined}
                    >
                      聯絡我們
                    </Typography>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="lg:w-1/5 md:w-1/2 w-full px-4  ">
              <h1 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3 font-taipei">
                法律
              </h1>
              <nav className="list-none mb-10">
                <ul>
                  <li>
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 font-taipei"
                      placeholder={undefined}
                    >
                      授權
                    </Typography>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-400 mt-8">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <Typography
              color="blue-gray"
              className="w-full text-sm text-center font-taipei"
              placeholder={undefined}
            >
              &copy; 2024 AP程式 升學專家
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
