import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Weather Facts",
  description: "Get the most accurate weather data with our advanced Weather Facts. Powered by hyper-local forecasts and real-time updates",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="title" content="Weather Facts" />
        <meta name="author" content="Mahmoud Abuyoussef" />
        <meta name="description" content="Get the most accurate weather data with our advanced Weather Facts. Powered by hyper-local forecasts and real-time updates" />
        <meta name="keywords" content="Weather Facts, Weather Facts, forecasts, mahmoud abuyoussef, Mahmoud Abu Youssef,mahmoudabuyoussef,mahmoud abu youssef,Programmer, mahmoud abuoyoussef, mahmoudabuoyoussef, mahmoudaboyoussef,mahmoudabuyousef,mahmoudabuyousif, Mahmoud Front-End Web Developer,Front-End Web Developer, Web Developer, Web Designer, mahmoudabuyoussef, mahmoud abuyoussef, mahmoud abu youssef, Portfolio, personal website, محمود أبويوسف, مطور ويب امامي,مبرمج" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="Weather Facts Mahmoud Abuyoussef" />
        <meta property="og:description" content="Get the most accurate weather data with our advanced Weather Facts. Powered by hyper-local forecasts and real-time updates" />
        <meta property="og:url" content="https://weather-facts.vercel.app/" />
        <meta property="og:site_name" content="Weather Facts Mahmoud Abuyoussef" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar-EG" />
        <meta property="og:image" content="https://weather-facts.vercel.app/android-chrome-192x192.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Weather Facts Mahmoud Abuyoussef" />
        <meta property="twitter:description" content="Get the most accurate weather data with our advanced Weather Facts. Powered by hyper-local forecasts and real-time updates" />
        <meta property="twitter:url" content="https://weather-facts.vercel.app/" />
        <meta property="twitter:site_name" content="Weather Facts Mahmoud Abuyoussef" />
        <meta property="twitter:type" content="website" />
        <meta property="twitter:locale" content="ar-EG" />
        <meta property="twitter:image" content="https://weather-facts.vercel.app/android-chrome-192x192.png" />
        <link rel="canonical" href="https://weather-facts.vercel.app/" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="icon" href="favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
