"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { FloatingBanner } from "./FloatingBanner";
import Cookies from "universal-cookie";
import { Customise } from "./Customise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faCookieBite } from "@fortawesome/free-solid-svg-icons";

export function ConsentForm() {
  const [decisionMade, setDecisionMade] = useState(true); // start with true to avoid flashing
  const [showCustomise, setShowCustomise] = useState(false);
  const cookies = useMemo(() => new Cookies(), []);

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  const sendConsent = useCallback((consent) => {
    gtag("consent", "update", consent);
    gtag("event", "cookie_consent_update");
  }, []);

  useEffect(() => {
    if (cookies.get("cookie_consent") !== undefined) {
      setDecisionMade(true);
      gtag("event", "cookie_consent_update");
    } else {
      setDecisionMade(false);
    }
  }, [cookies, setDecisionMade, sendConsent]);

  const handleDecision = (outcome) => {
    const consent = {
      ad_storage: typeof outcome === "string" ? outcome : outcome.ad_storage,
      analytics_storage:
        typeof outcome === "string" ? outcome : outcome.analytics_storage,
      ad_user_data:
        typeof outcome === "string" ? outcome : outcome.ad_user_data,
      ad_personalization:
        typeof outcome === "string" ? outcome : outcome.ad_personalization,
    };

    cookies.set("cookie_consent", consent, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: "/",
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    });

    sendConsent(consent);
    setDecisionMade(true);
  };

  return (
    <>
      {!decisionMade && !showCustomise && (
        <FloatingBanner
          onAccept={() => {
            handleDecision("granted");
          }}
          onDeny={() => {
            handleDecision("denied");
          }}
          onCustomise={() => {
            setShowCustomise(true);
          }}
        />
      )}
      {showCustomise && (
        <Customise
          onSet={(settings) => {
            handleDecision(settings);
            setShowCustomise(false);
          }}
          defaultValues={cookies.get("cookie_consent")}
        />
      )}
      {/* {decisionMade && !showCustomise && (
        <div className="fixed bottom-0 left-0 z-20 p-2">
          <button
            className="bg-white text-brand-black hover:bg-gray-200 cursor-pointer rounded-lg p-1 border-2 border-brand-black border-opacity-90 shadow-md h-10 w-10 flex items-center justify-center"
            title="Customise cookie settings"
            onClick={() => setShowCustomise(true)}
          >
            <FontAwesomeIcon icon={faCookieBite} className="w-7 h-7 inline" />
          </button>
        </div>
      )} */}
    </>
  );
}
