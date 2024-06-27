import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "James Plant",
  description:
    "Welcome to my portfolio! I'm a web application developer and technology leader. Based in and around Essex, please check out my work and reach out to me if you have any questions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen`}>{children}</body>
      <GoogleAnalytics gaId="G-4Z9EX7307B" />
      <GoogleTagManager gtmId="GTM-K56Z935N" />
    </html>
  );
}
