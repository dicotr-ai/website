"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: any;
  className?: string;
}

const Header = ({ config, className }: HeaderProps) => {
  // All state and effects for transparency have been removed for a static header.
  const logoSrc = "/newlogo.svg"; // Using the light logo permanently
  const navTextColor = "text-[#F8E9D6]/90 hover:text-[#F8E9D6]";

  return (
    <header
      // The header now has a fixed green background color and height.
      // I've used a hex code that closely matches your image.
      className={cn("bg-[#4A634A] fixed top-0 left-0 w-full z-50", className)}
    >
      {/* The container has a specific max-width and height to match your request */}
      <div className="mx-auto flex h-[88px] max-w-[1140px] items-center justify-between px-4">
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src={logoSrc}
            alt="Logo"
            className="h-8 w-auto" // Or adjust height as needed
          />
          <span className="text-2xl font-semibold tracking-tight text-white">
            {config?.brandName}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            {(
              config?.links || [
                { href: "/features", label: "Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ]
            ).map((link: any) => (
              <li key={link.href}>
                <Link href={link.href} className={navTextColor}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <Link
          href={config?.cta?.href || "#contact"}
          // Styles for the CTA button are now static to match the image
          className="hidden lg:inline-block rounded-full bg-[#6B856B] px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-90"
        >
          {config?.cta?.label || "Contact Us"}
        </Link>
      </div>
    </header>
  );
};

export default Header;
