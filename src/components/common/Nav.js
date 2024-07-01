"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { josefin } from "@/app/fonts";

export default function Nav() {
  return (
    <Disclosure
      as="nav"
      className="bg-[#1c282f] bg-opacity-90 sticky top-0 backdrop-blur-lg z-50 shadow"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 mr-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none transition-all duration-300">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FontAwesomeIcon
                        icon={faX}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faBars}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </DisclosureButton>
                </div>
                <div
                  className={`flex flex-shrink-0 text-xl mt-1 mr-5 items-center text-white ${josefin.className}`}
                >
                  <a
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("home")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    James Plant
                  </a>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <a
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("testimonials")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Testimonials
                  </a>

                  <a
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("projects")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Projects
                  </a>
                  <a
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("achievements")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Achievements
                  </a>
                  <a
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("technologies")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Technologies
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="bg-gradient-to-br from-orange-400 to-brand-orange text-white relative inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-75 transition-opacity duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("lets-talk")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Let&apos;s talk
                  </button>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            {({ close }) => (
              <div className="space-y-1 pb-3 pt-2">
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("testimonials")
                      .scrollIntoView({ behavior: "smooth" });
                    close();
                  }}
                >
                  Testimonials
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" });
                    close();
                  }}
                >
                  Projects
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("achievements")
                      .scrollIntoView({ behavior: "smooth" });
                    close();
                  }}
                >
                  Achievements
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("technologies")
                      .scrollIntoView({ behavior: "smooth" });
                    close();
                  }}
                >
                  Technologies
                </DisclosureButton>
              </div>
            )}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
