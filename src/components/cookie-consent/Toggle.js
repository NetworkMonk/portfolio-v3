"use client";

import { Switch } from "@headlessui/react";

export default function Toggle({ disabled, onChange, checked }) {
  return (
    <Switch
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      className={`group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none data-[checked]:bg-brand-orange ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
      />
    </Switch>
  );
}
