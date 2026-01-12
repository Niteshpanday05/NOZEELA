"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <Image
        src="/menu.png"
        alt=""
        width={20}
        height={28}
        className="cursor-pointer "
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-[#FAF7F2] text-gray-800 left-0 pt-12 top-16 w-full min-h-dvh flex flex-col items-center justify-start gap-10 text-xl z-10 ">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/shop" onClick={() => setOpen(false)}>
        
            Shop
          </Link>
           <Link href="/contact" onClick={() => setOpen(false)}>
            Cart
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Logout
          </Link>

         
        </div>
      )}
    </div>
  );
};

export default Menu;
