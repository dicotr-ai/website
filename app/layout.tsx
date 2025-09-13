import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Head from "next/head";



const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "DiCoTr",
  description: "Inovation With Execution",
    icons: {
    icon: "/favicon.ico", // For standard favicon
    apple: "/apple-touch-icon.png", // For iOS
    shortcut: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
