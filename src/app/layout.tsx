import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Blog",
  description: "This is my blog",
};

type Time = {
  dateTime: string;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=Asia/Tokyo", {
    cache: "force-cache",
  });
  const data: Time = await res.json();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1 className="text-4xl font-bold">{data.dateTime}</h1>
        {children}
      </body>
    </html>
  );
}
