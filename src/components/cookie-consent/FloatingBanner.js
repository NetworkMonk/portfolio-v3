"use client";

import React from "react";
import PropTypes from "prop-types";

export function FloatingBanner({ onAccept, onDeny, onCustomise }) {
  return (
    <div
      className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 in-view"
      style={{ zIndex: "2000" }}
    >
      <div
        className="max-w-xl px-2 sm:px-6 lg:px-8 in-up"
        style={{ animationDelay: ".2s" }}
      >
        <div className="bg-white shadow-lg border-2 border-black flex flex-col gap-4 p-4">
          <div className="flex w-full items-center">
            <div className="flex-col flex gap-2">
              <div className="font-bold text-xl text-gray-900">
                We value your privacy
              </div>
              <div className="font-medium text-black text-sm">
                We use cookies to enhance your browsing experience, serve
                personalised ads or content and analyse our traffic. By clicking
                &quot;Accept All&quot;, you consent to our use of cookies.
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:mx-0">
            <button
              className="flex-1 text-base font-semibold border-2 border-gray-800 text-black p-3 cursor-pointer bg-white hover:bg-gray-200 transition-colors duration-300"
              onClick={onCustomise}
            >
              Customise
            </button>
            <button
              className="flex-1 text-base font-semibold border-2 border-gray-800 text-black p-3 cursor-pointer bg-white hover:bg-gray-200 transition-colors duration-300"
              onClick={onDeny}
            >
              Reject All
            </button>
            <button
              className="flex-1 text-base font-semibold border-2 border-gray-800 text-white p-3 cursor-pointer bg-black hover:bg-gray-800 transition-colors duration-300"
              onClick={onAccept}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

FloatingBanner.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onDeny: PropTypes.func.isRequired,
  onCustomise: PropTypes.func.isRequired,
};
