"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import PortableText from "react-portable-text";
import { urlFor } from "@/utils/client";
import DownloadFile from "./DownloadFile";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { addItem, clearNotification  } from "../GlobalRedux/Features/cartSlice";

const ProductDetailComponent = ({ productSlug }: any) => {
  console.log("Catergory:", productSlug.categories[0].title.toLowerCase())

  const dispatch = useDispatch();

  const notification = useSelector((state: RootState) => state.cart.notification);

  useEffect(() => {
    if (notification) {
      dispatch(clearNotification());
    }
  }, []);
  

  return (
    <div className="max-w-5xl mx-auto pt-28 text-black">
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
                href={"/mockups"}
                className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
              >
                MOCKUPS
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
                href={`/mockups/${productSlug.categories[0].title.toLowerCase()}`}
                className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
              >
                {productSlug.categories[0].title}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex justify-center flex-wrap lg:flex-nowrap">
        <img
          className={
            productSlug.slug.current === "twill-cap" || "hoodie-zipper-2"
              ? "h-[400px] lg:pr-32 object-contain w-full"
              : "h-[700px] object-contain w-full"
          }
          src={urlFor(productSlug.productImage).url()}
          alt=""
        />
        <div className="space-y-5 flex flex-col items-center lg:items-start px-5">
          <h1 className="font-bold text-3xl">{productSlug.title}</h1>
          <p className="text-3xl">Php{productSlug.price}</p>
          
          <h1 className={`${notification === "Item already in cart" ? 'text-red-500' : 'text-black'}`}>{notification}</h1>

          <button
            className="bg-black text-white px-16 rounded-md py-3 hover:bg-gray-700"
            onClick={() =>
              dispatch(
                addItem({
                  id: productSlug._id,
                  title: productSlug.title,
                  price: productSlug.price,
                  priceId: productSlug.priceId,
                  productImage: productSlug.productImage,
                  productDescription: productSlug.productDescription,
                })
              )
            }
          >
            Add to Bag
          </button>

          <div className="space-y-3">
            <PortableText
              content={productSlug.productDescription}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-2xl font-bold my-5" {...props}></h1>
                ),
                h2: (props: any) => (
                  <h2 className="text-xl font-bold my-5" {...props}></h2>
                ),
                h3: (props: any) => (
                  <h3 className="text-lg font-bold my-4" {...props}></h3>
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
            />
          </div>
          <div>
            <h1 className="font-bold">Share this product with your friends</h1>
          </div>
          {/* <DownloadFile productSlug={productSlug} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
