"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { UserButton } from "@clerk/nextjs";

const Navbar2 = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const handleButtonClick = () => {
    setIsMenuHidden((prevState) => !prevState);
  };

  return (
    <div className="lg:hidden">
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg
          bg-blue-500 
          text-white
        "
      >
        <div>
          <img className="h-12 cursor-pointer" src="/artlineslogo.png" alt="" />
        </div>

        <div className="flex space-x-4 items-center">
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
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          onClick={handleButtonClick}
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={
            isMenuHidden
              ? "hidden w-full md:flex md:items-center md:w-auto"
              : "w-full md:flex md:items-center md:w-auto"
          }
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              items-center
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link
                className="md:p-4 py-2 block text-white hover:text-purple-400"
                href="/"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block text-white  hover:text-purple-400"
                href="/mockups"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block text-white hover:text-purple-400"
                href="#"
              >
                PAYMENT
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block text-white hover:text-purple-400"
                href="/account"
              >
                MY ACCOUNT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
