'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";


const headerVariants = cva(
  "fixed top-0 left-0 w-full py-6 z-50 transition-colors duration-300",
  {
    variants: {
      dark: {
        true: "bg-transparent text-white",
        false: "bg-white shadow-md text-gray-800",
      },
    },
    defaultVariants: {
      dark: false,
    },
  }
);

interface HeaderProps {
  config?: any;
  className?: string; 
}

const Header = ({ config, className }: HeaderProps) => {
  const pathname = usePathname();
  const [darkHeader, setDarkHeader] = useState(pathname === "/");
  const [scrolled, setScrolled] = useState(
    typeof window !== "undefined" ? window.scrollY > 10 : false
  );

  useEffect(() => {
    setDarkHeader(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = darkHeader && !scrolled;

  return (
    <header
      suppressHydrationWarning
      className={cn(
        headerVariants({ dark: isTransparent }),
        className
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src={isTransparent ? "/logo.svg" : "/darklogo.png"}
            alt="Logo"
            className="h-8 w-auto"
          />
          <span className="text-2xl font-semibold tracking-tight">
            {config?.brandName || "DiCoTr"}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            {(config?.links || [
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/about", label: "About" },
            ]).map((link: any) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isTransparent 
                    ? "text-white/90 hover:text-green-400" 
                    : "text-gray-600 hover:text-green-500"
                  }
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
          className={
            isTransparent
              ? "hidden lg:inline-block text-base font-medium px-6 py-3 rounded-full bg-white/10 border border-white/40 text-white hover:bg-white/20"
              : "hidden lg:inline-block text-base font-medium px-6 py-3 rounded-full text-gray-800 bg-gray-100 border border-gray-200 hover:bg-gray-200"
          }
        >
          {config?.cta?.label || "Contact Us"}
        </Link>

        {/* Mobile menu */}
        <button
          className={isTransparent ? "lg:hidden text-3xl text-white" : "lg:hidden text-3xl text-gray-800"}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;