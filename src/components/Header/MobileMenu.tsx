import Link from "next/link";
import Image from "next/image";
import { Dialog, Disclosure } from "@headlessui/react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { linksData } from "./data";
import { basePath } from "../../app/config";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">AP程式</span>
            <Image
              className="h-10 w-auto rounded-full"
              src={`${basePath}/Ap_logo_small.png`}
              alt=""
              width={32}
              height={32}
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            {linksData.map((link) => (
              <Disclosure as="div" className="-mx-3" key={link.name}>
                {({ open }) => (
                  <>
                    {link.subLinks ? (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {link.name}
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {link.subLinks.map((subLink) => (
                            <Disclosure.Button
                              as="a"
                              href={`${basePath}${subLink.href}`}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              key={subLink.name}
                            >
                              {subLink.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    ) : (
                      <Disclosure.Button
                        as="a"
                        href={`${basePath}${link.href}`}
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {link.name}
                      </Disclosure.Button>
                    )}
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileMenu;
