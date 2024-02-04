import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-center border-t border-blue-gray-50 p-4 text-center gap-y-4 md:flex-row md:justify-center md:p-6 md:gap-x-12">
      <Typography
        placeholder={undefined}
        color="blue-gray"
        className="w-full text-sm font-normal md:w-auto"
      >
        &copy; 2024 AP程式
      </Typography>
      <ul className="flex flex-wrap justify-center gap-4 text-sm md:gap-x-8">
        <li>
          <Typography
            placeholder={undefined}
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            placeholder={undefined}
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            placeholder={undefined}
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            placeholder={undefined}
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
