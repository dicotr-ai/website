'use client'; 

import Link from "next/link";
import { usePathname } from 'next/navigation'; 
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname(); 
  const [darkHeader, setDarkHeader] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setDarkHeader(true);
    } else {
      setDarkHeader(false);
    }
  }, [pathname]); 

  return (
    <header className="absolute top-0 left-0 w-full py-10 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {darkHeader ? (
          <>
            {/* Dark Header Content (no changes here) */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
              <span className="text-2xl font-semibold text-white">DiCoTr</span>
            </Link>
            <nav className="hidden lg:block">
              <ul className="flex gap-12">
                <li>
                  <Link href="/features" className="text-base text-white opacity-90 hover:opacity-100 hover:text-green-500">Features</Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-base text-white opacity-90 hover:opacity-100 hover:text-green-500">Pricing</Link>
                </li>
                <li>
                  <Link href="/about" className="text-base text-white opacity-90 hover:opacity-100 hover:text-green-500">About</Link>
                </li>
              </ul>
            </nav>
            <Link
              href="#contact"
              className="hidden lg:inline-block text-base font-medium px-7 py-4 bg-white/10 border border-white/40 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </>
        ) : (
          <>
            {/* Light Header Content (no changes here) */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/darklogo.png" alt="Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-gray-800">DiCoTr</span>
            </Link>
            <nav className="hidden lg:block">
              <ul className="flex gap-12">
                <li>
                  <Link href="/features" className="text-gray-600 hover:text-green-500">Features</Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-600 hover:text-green-500">Pricing</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-green-500">About</Link>
                </li>
              </ul>
            </nav>
            <Link
              href="#contact"
              className="hidden lg:inline-block text-base font-medium px-7 py-4 text-gray-800 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </Link>
          </>
        )}

        <button className="lg:hidden bg-none border-none text-white text-3xl cursor-pointer">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;