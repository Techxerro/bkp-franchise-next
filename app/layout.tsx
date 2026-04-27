import type { Metadata } from "next";
import "./globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '../components/BootstrapClient';
import FadeUpObserver from '../components/useFadeUpObserver'; // ← moved to components

export const metadata: Metadata = {
  title: "Big Kahuna Pizza — Franchise Partner Program",
  description: "Big Kahuna's Pizza franchise opportunity. 30-year brand, 72–75% gross margins, three flexible formats from $150K. Now accepting franchise partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <BootstrapClient />
        <FadeUpObserver />
        {children}
      </body>
    </html>
  );
}