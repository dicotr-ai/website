'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const Header = ({ config }: { config?: any }) => {
  const pathname = usePathname();
  const [darkHeader, setDarkHeader] = useState(false);

  // ✅ Avoid hydration mismatch by initializing after mount
  useEffect(() => {
    setDarkHeader(pathname === "/");
  }, [pathname]);

  return (
    <header
      suppressHydrationWarning
      className={twMerge(
        "fixed top-0 left-0 w-full py-6 z-50 transition-colors duration-300",
        darkHeader ? "bg-transparent" : "bg-white shadow-md"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src={darkHeader ? "/logo.svg" : "/darklogo.png"}
            alt="Logo"
            className="h-8 w-auto"
          />
          <span
            className={twMerge(
              "text-2xl font-semibold tracking-tight",
              darkHeader ? "text-white" : "text-gray-800"
            )}
          >
            {config?.brandName || "DiCoTr"}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            {(config?.links || [
              { href: "/features", label: "Features" },
              { href: "#pricing", label: "Pricing" },
              { href: "/about", label: "About" },
            ]).map((link: any) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={twMerge(
                    "text-base transition-colors font-medium",
                    darkHeader
                      ? "text-white/90 hover:text-green-400"
                      : "text-gray-600 hover:text-green-500"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link
          href={config?.cta?.href || "#contact"}
          className={twMerge(
            "hidden lg:inline-block text-base font-medium px-6 py-3 rounded-full transition-colors",
            darkHeader
              ? "bg-white/10 border border-white/40 text-white hover:bg-white/20"
              : "text-gray-800 bg-gray-100 border border-gray-200 hover:bg-gray-200"
          )}
        >
          {config?.cta?.label || "Contact Us"}
        </Link>

        {/* Mobile menu button */}
        <button
          className={twMerge(
            "lg:hidden text-3xl cursor-pointer transition-colors",
            darkHeader ? "text-white" : "text-gray-800"
          )}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
