"use client";

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="relative h-12 md:h-12 px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className=" p-2 text-2xl tracking-wide">NOZEELA </div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center justify-between gap-10 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-20 ">
          <Link href="/" className="flex items-center gap-2">
            {/* <Image src="/logo.png" alt="" width={24} height={24} /> */}
            <div className="text-xl tracking-wide  font-semibold ">NOZEELA</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-around gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
