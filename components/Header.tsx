"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";
import { AiFillHeart } from "react-icons/ai";


const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex justify-between items-center shadow-lg mb-1">
      <div className="flex ml-5">Logo</div>
      <AiFillHeart fill="red" size={50} />
      <div className="flex items-center gap-9 m-5">
        <p>
          <Link
            href="/"
            className={`p-3 ${pathname === "/" ? "underline" : ""}`}
          >
            Home
          </Link>
        </p>
        <p>
          <Link
            href="/about"
            className={`p-3 ${pathname === "/about" ? "underline" : ""}`}
          >
            About
          </Link>
        </p>
        <p>
          <Link
            href="/blog"
            className={`p-3 ${pathname === "/blog" ? "underline" : ""}`}
          >
            Blog
          </Link>
        </p>
        <p>
          <Link
            href="/contact"
            className={`p-3 ${pathname === "/contact" ? "underline" : ""}`}
          >
            Contact
          </Link>
        </p>

        <button
          className="p-3 bg-cyan-800
         hover:bg-cyan-950 shadow-lg transition rounded-lg text-white"
          type="button"
          onClick={() => router.push("/auth/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
