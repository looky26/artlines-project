"use client";

import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="bg-blue-500 hidden lg:flex justify-between px-10 items-center py-2">
      {/* logo */}
      <Link href={"/"}>
        <img className="h-12 cursor-pointer" src="/artlineslogo.png" alt="" />
      </Link>

      {/* links middle */}
      <div className="lg:block hidden">
        <ul className="flex space-x-5 ml-48">
          <Link href={"/"}>
            <li className="cursor-pointer hover:text-purple-400">HOME</li>
          </Link>

          <Link href={'/products'}>
         
          <li className="cursor-pointer hover:text-purple-400">
            <div className="flex items-center">
              SHOP
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg> */}
            </div>
          </li>
          </Link>

          <li className="cursor-pointer hover:text-purple-400">PAYMENT</li>
        </ul>
      </div>

      {/* links right */}
      <div className="">
        <ul className="flex space-x-5">
          <li className="cursor-pointer lg:block hidden hover:text-purple-400">
            <Link href={"/account"}>MY ACCOUNT</Link>
          </li>
          <li className="cursor-pointer lg:block hidden hover:text-purple-400">
            SEARCH
          </li>
          <Link
            href={"/cart"}
            className="flex cursor-pointer hover:text-purple-400"
          >
            CART
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p>{items.length}</p>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
