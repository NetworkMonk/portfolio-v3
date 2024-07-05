"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBlog, faX } from "@fortawesome/free-solid-svg-icons";
import { josefin } from "@/app/fonts";
import Link from "next/link";

export default function Nav({ currentPath }) {
  const DesktopNavLink = ({ href, id, children }) => {
    return currentPath === "/" ? (
      <a
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        }}
      >
        {children}
      </a>
    ) : (
      <Link
        href={href}
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 cursor-pointer"
      >
        {children}
      </Link>
    );
  };

  const MobilNavLink = ({ href, id, children, close }) => {
    return currentPath === "/" ? (
      <DisclosureButton
        as="a"
        href="#"
        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(id).scrollIntoView({ behavior: "smooth" });
          close();
        }}
      >
        {children}
      </DisclosureButton>
    ) : (
      <Link
        href={href}
        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6 cursor-pointer"
      >
        {children}
      </Link>
    );
  };

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
                  {currentPath === "/" ? (
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
                  ) : (
                    <Link href="/">James Plant</Link>
                  )}
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <DesktopNavLink href="/#testimonials" id="testimonials">
                    Testimonials
                  </DesktopNavLink>
                  <DesktopNavLink href="/#projects" id="projects">
                    Projects
                  </DesktopNavLink>
                  <DesktopNavLink href="/#achievements" id="achievements">
                    Achievements
                  </DesktopNavLink>
                  <DesktopNavLink href="/#technologies" id="technologies">
                    Technologies
                  </DesktopNavLink>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link
                    href="/blog"
                    className="inline-block relative mr-3"
                    title="Blog"
                  >
                    <FontAwesomeIcon
                      icon={faBlog}
                      className="relative top-1 h-5 w-5 inline-block px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 cursor-pointer"
                    />
                  </Link>
                  {currentPath === "/" ? (

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
                  </button> ) : (
                    <Link href="/#lets-talk" type="button" className="bg-gradient-to-br from-orange-400 to-brand-orange text-white relative inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-75 transition-opacity duration-300">
                      Let&apos;s talk
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            {({ close }) => (
              <div className="space-y-1 pb-3 pt-2">
                <MobilNavLink href="/#testimonials" id="testimonials" close={close}>
                  Testimonials
                </MobilNavLink>
                <MobilNavLink href="/#projects" id="projects" close={close}>
                  Projects
                </MobilNavLink>
                <MobilNavLink href="/#achievements" id="achievements" close={close}>
                Achievements
                </MobilNavLink>
                <MobilNavLink href="/#technologies" id="technologies" close={close}>
                Technologies
                </MobilNavLink>
              </div>
            )}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
