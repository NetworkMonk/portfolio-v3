"use client";

import React, { useState } from "react";
import Toggle from "./Toggle";

export function Customise({ onSet, defaultValues }) {
  const [formData, setFormData] = useState({
    necessary: true,
    analytics: defaultValues?.analytics_storage === "granted" ? true : false,
    advertising: defaultValues?.ad_storage === "granted" ? true : false,
  });

  const cookieCategories = [
    {
      id: "necessary",
      title: "Necessary",
      mandatory: true,
      description:
        "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
    },
    {
      id: "analytics",
      title: "Analytics",
      mandatory: false,
      description:
        "Analytics cookies help website owners to understand how visitors interact with websites by collecting and reporting information on key metrics such as number of visitors, bounce rates and traffic sources.",
    },
    {
      id: "advertising",
      title: "Advertising",
      mandatory: false,
      description:
        "Advertising cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
    },
  ];

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center sm:p-2"
      style={{ zIndex: "2000" }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg h-screen sm:h-auto max-h-screen sm:border-2 border-black flex flex-col gap-4 p-4">
          <div className="flex w-full items-center">
            <div className="flex-col flex gap-2">
              <div className="font-bold text-xl text-gray-900">
                Customise Cookie Consent
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="font-medium text-black text-sm mb-3">
              We use cookies to enhance your browsing experience, serve
              personalised ads or content and analyse our traffic. By clicking
              &quot;Accept All&quot;, you consent to our use of cookies.
            </div>
            <div className="font-medium text-black text-sm mb-5">
              You will find more information about all the cookies we use under
              each consent category below. You can choose to enable or disable
              some or all of these categories, but this may affect your browsing
              experience.
            </div>
            {cookieCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center justify-center mb-3">
                  <p className="font-bold text-lg">{category.title}</p>
                  <div className="ml-auto">
                    <Toggle
                      disabled={category.mandatory}
                      checked={formData[category.id]}
                      onChange={(data) => {
                        setFormData({
                          ...formData,
                          [category.id]: data,
                        });
                      }}
                    />
                  </div>
                </div>
                <p className="text-sm mt-3">{category.description}</p>
                <hr className="bg-gray-300 my-5" />
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:mx-0">
            <button
              className="flex-1 text-base font-semibold border-2 border-gray-800 text-black p-3 cursor-pointer bg-white hover:bg-gray-200 transition-colors duration-300"
              onClick={() => {
                setFormData({
                  ...formData,
                  analytics: false,
                  advertising: false,
                });
              }}
            >
              Reject All
            </button>
            <button
              className="flex-1 text-base font-semibold border-2 border-gray-800 text-black p-3 cursor-pointer bg-white hover:bg-gray-200 transition-colors duration-300"
              onClick={() => {
                setFormData({
                  ...formData,
                  analytics: true,
                  advertising: true,
                });
              }}
            >
              Accept All
            </button>
            <button
              className="flex-1 text-base font-semibold border-2 border-gray-800 text-white p-3 cursor-pointer bg-black hover:bg-gray-800 transition-colors duration-300"
              onClick={() => {
                onSet({
                  analytics_storage: formData.analytics ? "granted" : "denied",
                  ad_storage: formData.advertising ? "granted" : "denied",
                  ad_user_data: formData.advertising ? "granted" : "denied",
                  ad_personalization: formData.advertising
                    ? "granted"
                    : "denied",
                });
              }}
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
