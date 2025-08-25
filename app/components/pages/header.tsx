import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <li>
    <Link
      href={href}
      className="text-base text-white opacity-90 hover:opacity-100 hover:underline transition-opacity"
    >
      {children}
    </Link>
  </li>
);

const Header = () => (
  <header className="absolute top-0 left-0 w-full py-10 z-10">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <Link href="#" className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
        <span className="text-2xl font-semibold">DiCoTr</span>
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex gap-12">
          <NavLink href="#services">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#about">About</NavLink>
        </ul>
      </nav>

      <Link
        href="#contact"
        className="hidden lg:inline-block text-base font-medium px-7 py-4 bg-white/10 border border-white/40 rounded-full hover:bg-white/20 transition-colors"
      >
        Contact Us
      </Link>

      <button className="lg:hidden bg-none border-none text-white text-3xl cursor-pointer">
        ☰
      </button>
    </div>
  </header>
);

export default Header;
