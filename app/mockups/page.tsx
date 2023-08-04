import React from "react";
import { sanityClient, urlFor } from "@/utils/client";
import Link from "next/link";

const fetchMockupCatData = async () => {
  const query = `*[_type == "mockupscategory"] {
    title,
    categoryImage,
    publishedAt,
  } | order(publishedAt asc)
          
        `;

  const result = await sanityClient.fetch(query, {
    cache: "force-cache",
  });
  return result;
};

export const revalidate = 60;

const Mockups = async () => {
  const mockupcatData = await fetchMockupCatData();
  console.log(mockupcatData);

  return (
    <div className="bg-white text-black">
      <div className="max-w-6xl mx-auto pt-32">
        <h1 className="text-4xl font-bold">MOCKUPS</h1>

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
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  MOCKUPS
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-fluid">
        {mockupcatData.slice(0,6).map((item: any) => {
          if (item.title === "FACEMASK" || item.title === "CAP") {
            return null; // Hide the item if the title is "facemask" or "cap"
          }

          return (
            <Link key={item.title.toLowerCase()} href={`/mockups/${item.title.toLowerCase()}`}>
              <div className="flex justify-center flex-col text-center text-2xl font-bold group cursor-pointer">
                <img
                  className="h-96 object-contain transition-transform duration-200 transform-gpu group-hover:scale-110"
                  src={urlFor(item.categoryImage).url()}
                  alt=""
                />
                <h1>
                  {item.title === "SHORTANDPANTS"
                    ? "SHORT AND PANTS"
                    : item.title}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
      {/* Align last 2 items */}

      <div className="grid lg:grid-cols-2 justify-items-center items-center lg:w-[800px] mx-auto pt-5">
        {mockupcatData.slice(-4).map((item: any) => {
           if (item.title === "FACEMASK" || item.title === "CAP") {
            return null; // Hide the item if the title is "facemask" or "cap"
          }

          return (
            <Link key={item.title.toLowerCase()} href={`/mockups/${item.title.toLowerCase()}`}>
            <div className="text-center text-2xl font-bold mt-10 group cursor-pointer">
              <img
                className="h-96 object-contain transition-transform duration-200 transform-gpu group-hover:scale-110"
                src={urlFor(item.categoryImage).url()}
                alt=""
              />
              <h1>{item.title}</h1>
            </div>
          </Link>
          )
       
})}
      </div>

      {/* Account */}
      <div className="flex justify-center space-x-20 pt-20 pb-20">
        <div className="flex flex-col items-center space-y-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <h1>My Account</h1>
        </div>
        <div className="flex flex-col items-center space-y-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>

          <h1>Track Orders</h1>
        </div>
        <div className="flex flex-col items-center space-y-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <h1>Shopping Bag</h1>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black text-center text-white h-40 pt-10 ">
        <h1>artlinesgraphicdesign</h1>
        <a href="#">Report Abuse</a>
      </footer>
    </div>
  );
};

export default Mockups;
