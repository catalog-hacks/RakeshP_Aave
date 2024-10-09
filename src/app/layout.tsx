import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter, Roboto_Mono} from "next/font/google";
import "./globals.css";


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
  title: "Create Next App",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}