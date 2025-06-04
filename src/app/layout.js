import { GoogleTagManager } from "@next/third-parties/google";
import { montserrat } from "./fonts";
import "./globals.css";
import { ConsentForm } from "@/components/cookie-consent/ConsentForm";

export const metadata = {
  title:
    "James Plant | UK-Based Freelance Shopify, E-Commerce & Bespoke Web Application Developer",
  description:
    "UK-based freelance developer with 20+ years of experience building Shopify stores, e-commerce solutions, and bespoke web applications. Expert in Next.js, React, and modern web technologies, delivering tailored solutions for businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen`}>
        {children}
        <ConsentForm />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      </body>
    </html>
  );
}
