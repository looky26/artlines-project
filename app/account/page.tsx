"use client";

import { SignIn, SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Account = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="bg-white text-black h-[100vh]">
      <div className="max-w-6xl mx-auto pt-36 flex">
        {/* left */}
        <div className="w-[600px]">
          <h1 className="text-3xl font-bold">Account</h1>

          {/* <!-- Breadcrumb --> */}
          <nav className="flex py-3 text-gray-700 " aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href={"/"}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-black"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <Link
                    href={"/products"}
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-black"
                  >
                    Store
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <Link
                    href={"/account"}
                    className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
                  >
                    Account
                  </Link>
                </div>
              </li>
              {/* <li aria-current="page">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <Link
                  href={`/mockups/${productSlug.categories[0].title.toLowerCase()}`}
                  className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
                >
                  {productSlug.categories[0].title}
                </Link>
              </div>
            </li> */}
            </ol>
          </nav>
          <div className="flex items-center space-x-2 pt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              {!isLoaded || !isSignedIn ? (
                <>
                  <h1 className="font-bold">Guest Account</h1>
                  <p>You are not signed in</p>
                </>
              ) : (
                <>
                  <p>Welcome {user.fullName}</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* right */}

        {isSignedIn ? (
          <div>
            <h1>Order History</h1>
          </div>
        ) : (
          <div className="">
            <h1 className="font-bold text-lg">Join us or sign in</h1>
            <p className="pt-5">
              Track your future orders, checkout faster, and sync your
              favorites. Just enter your email and we’ll send you a special link
              that will sign you in instantly.
            </p>
            <p className="pt-5">
              An account will be automatically created for you if you don’t have
              one yet.
            </p>
            <div className="pt-40">
              <p>This is a protected page.</p>
              <SignInButton mode="modal" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
