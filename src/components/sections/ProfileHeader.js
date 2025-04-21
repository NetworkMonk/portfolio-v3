"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Image from "next/image";
import { josefin } from "@/app/fonts";
import Blocks from "../animated/Blocks";
import InView from "../animated/InView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function ProfileHeader() {
  const cvUrl = process.env.NEXT_PUBLIC_CV_URL;

  return (
    <div id="home">
      <Section>
        <Container>
          <div id="home">
            <InView>
              <div className="relative">
                <div className="lg:grid grid-cols-2 gap-5">
                  <div className="h-full flex flex-col lg:items-center md:p-5 lg:order-2">
                    <div className="flex-1 flex items-center in-up">
                      <Image
                        src="/img/cartoon-profile-image.png"
                        alt="This is me! James!"
                        className="h-48 w-48 lg:mb-24"
                        width="256"
                        height="256"
                      />
                    </div>
                  </div>
                  <div className="h-full flex flex-col items-center md:px-10 lg:py-10 lg:order-1">
                    <div className="flex-1 flex items-center py-20 relative">
                      <div>
                        <h1
                          className={`text-6xl font-bold tracking-wide in-up-right ${josefin.className}`}
                          style={{ animationDelay: "0s" }}
                        >
                          Hi I&apos;m James!
                        </h1>
                        <h2
                          className="text-4xl font-semibold tracking-wide mt-10 in-up-right"
                          style={{ animationDelay: "0.5s" }}
                        >
                          A Senior Full-Stack Developer Specializing in Shopify
                          & Next.js for UK E-commerce.
                        </h2>
                        <div
                          className="flex flex-col md:flex-row gap-5 mt-10 in-up-right"
                          style={{ animationDelay: "1s" }}
                        >
                          <h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              fill="url(#my-cool-gradient)"
                              className="h-4 w-4 mr-1.5 inline-block -mt-1"
                            >
                              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                            Based in Essex, UK
                          </h3>
                          <h3>
                            <span className="h-3 w-3 mr-1.5 inline-block rounded-full bg-gradient-to-br from-teal-200 to-brand-teal"></span>
                            Open for New Opportunities
                          </h3>
                        </div>
                        <div
                          className="mt-10 in-up-right"
                          style={{ animationDelay: "1.5s" }}
                        >
                          <button
                            className="bg-gradient-to-br from-orange-400 to-brand-orange text-white rounded px-5 py-3 hover:opacity-75 transition-opacity duration-300"
                            onClick={(e) => {
                              e.preventDefault();
                              document
                                .getElementById("lets-talk")
                                .scrollIntoView({ behavior: "smooth" });
                            }}
                          >
                            Let&apos;s talk
                          </button>
                          <a
                            href="https://thebeardeddeveloper.co.uk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3"
                          >
                            <button className="bg-gradient-to-br from-zinc-400 to-zinc-600 text-white rounded px-5 py-3 hover:opacity-75 transition-opacity duration-300">
                              Hire Me
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Blocks />
              </div>
            </InView>
          </div>
        </Container>
      </Section>
    </div>
  );
}
