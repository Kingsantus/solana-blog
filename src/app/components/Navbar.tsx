"use client";

import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {
  const pathname = usePathname();

  return (
    <div className="max-w-[90%] mx-auto">
      <nav className="bg-white p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-xl font-semibold dark:text-white">Solana-Blog-App</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavLink href="/" active={pathname === "/"}>Home</NavLink>
          <NavLink href="/about" active={pathname === "/about"}>About</NavLink>
          <NavLink href="/services" active={pathname === "/services"}>Services</NavLink>
          <NavLink href="/pricing" active={pathname === "/pricing"}>Pricing</NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>Contact</NavLink>
        </div>
        <div className="flex md:order-2 space-x-3">
          <WalletMultiButton />
        </div>
        <MobileNav />
      </nav>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active: boolean;
}

function NavLink({ href, children, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-gray-900 dark:text-white px-3 py-2 rounded-md text-xl font-medium ${active ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
    >
      {children}
    </Link>
  );
}

function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button 
        className="px-4 py-2 border rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md flex flex-col space-y-2 p-2 z-50">
          <NavLink href="/" active={pathname === "/"}>Home</NavLink>
          <NavLink href="/about" active={pathname === "/about"}>About</NavLink>
          <NavLink href="/services" active={pathname === "/services"}>Services</NavLink>
          <NavLink href="/pricing" active={pathname === "/pricing"}>Pricing</NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>Contact</NavLink>
        </div>
      )}
    </div>
  );
}