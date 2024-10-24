import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter, Roboto_Mono} from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import 'lenis/dist/lenis.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const regola = localFont({
  src: "./fonts/FTRegolaNeueTrial-Semibold.woff2",
  variable: "--font-fs-regola",
  weight: "600",
});
const regola_medium = localFont({
  src: "./fonts/FTRegolaNeueTrial-Medium.woff2",
  variable: "--font-fs-regola-medium",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Aave",
  description: "Aave is an Open Source Protocol to create Non-Custodial Liquidity Markets to earn interest on supplying and borrowing assets with a variable interest rate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${regola.variable} ${regola_medium.variable} ${inter.variable} ${roboto.variable} font-inter`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
