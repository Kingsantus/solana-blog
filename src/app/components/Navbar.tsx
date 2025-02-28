"use client";

import Link from "next/link";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 flex items-center justify-between">
      <Link href="https://flowbite-react.com" className="flex items-center space-x-3">
        <Image src="/favicon.svg" width={36} height={36} alt="Logo" />
        <span className="text-xl font-semibold dark:text-white">Flowbite React</span>
      </Link>
      <div className="hidden md:flex space-x-4">
        <NavLink href="#" active>Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">Contact</NavLink>
      </div>
      <div className="flex md:order-2 space-x-3">
        <WalletMultiButton />
      </div>
    </nav>
  );
}

function NavLink({ href, children, active }) {
  return (
    <Link
      href={href}
      className={`text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium ${active ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
    >
      {children}
    </Link>
  );
}

function MobileNav() {
  return (
    <div className="md:hidden">
      <button className="px-4 py-2 border rounded-md">Menu</button>
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md flex flex-col space-y-2 p-2 hidden">
        <NavLink href="#" active>Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">Contact</NavLink>
      </div>
    </div>
  );
}
