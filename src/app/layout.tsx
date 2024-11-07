import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["greek"] });

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
        className={`${inter.className} antialiased`}
      >
        <h1 className="text-4xl font-bold">{data.dateTime}</h1>
        {children}
      </body>
    </html>
  );
}
