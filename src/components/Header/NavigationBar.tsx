import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { linksData } from "./data";

const linkStyle = "text-sm font-semibold leading-6 text-gray-900";

export interface NavigationBarProps {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationBar = ({ setMobileMenuOpen }: NavigationBarProps) => {
  return (
    <nav
      aria-label="Global"
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    >
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">AP程式</span>
          <Image
            className="h-10 w-auto rounded-full"
            src="/Ap_logo_small.png"
            alt=""
            width={32}
            height={32}
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        {linksData.map((link) =>
          link.hasPopover ? (
            <Popover key={link.name} className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                {link.name}
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {link.subLinks?.map((subLink) => (
                      <div
                        key={subLink.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <subLink.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={subLink.href}
                            className="block font-semibold text-gray-900"
                          >
                            {subLink.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {subLink.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          ) : (
            <a key={link.name} href={link.href} className={linkStyle}>
              {link.name}
            </a>
          )
        )}
      </Popover.Group>
    </nav>
  );
};

export default NavigationBar;
