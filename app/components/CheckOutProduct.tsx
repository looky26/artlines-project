"use client";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { clearCart, removeFromCart } from "../GlobalRedux/Features/cartSlice";
import Image from "next/image";
import { urlFor } from "@/utils/client";
import { checkout } from "../../checkout";
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51NTrBSA3aTzlY3vKif07vzJozpEG3eieVK2waJdCYGmNPThp12sTNZsDUSSwzZA43GeMFNXqGLSnXzzxlgR3UONV00RLxTppaS"
);

interface BasketItem {
  id: string;
  title: string;
  price: number;
  priceId: string;
  productImage: string;
}

const CheckOutProduct = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  console.log(items);

  const computeTotalPrice = () => {
    const itemPrices = items.map((item: BasketItem) => item.price * 1);
    const totalPrice = itemPrices.reduce((total, price) => total + price, 0);
    return totalPrice;
  };

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //Call the back end to create a checkout session...
    const checkoutSession = await axios.post("/api/create-checkout-session/", {
      items,
      email: user?.primaryEmailAddress?.emailAddress,
    });
    // Redirect customer to stripe checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result?.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="bg-white h-[80vh] text-black">
      <div className="max-w-6xl mx-auto px-10 pt-32">
        <h1 className="text-3xl font-bold">Shopping cart</h1>

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
                  Shopping cart
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto flex justify-around flex-wrap gap-y-20">
        {/* left */}
        <div>
          {items.map((item: BasketItem) => (
            <div>
              <div className="flex items-center space-x-3 px-5 w-[360px] lg:w-[400px]">
                <img
                  className="h-16 object-contain"
                  src={urlFor(item.productImage).url()}
                />
                <div className="flex-grow">
                  <h1>{item.title}</h1>
                  <h1>{item.price}</h1>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="justify-self-end"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between px-5 w-[360px] lg:w-[400px] pt-10 font-bold text-xl">
            <h1>TOTAL</h1>
            <p className="ml-10">&#8369;{computeTotalPrice()}</p>
          </div>

          {items.length ? (
            <button
              className="w-fit block mx-auto border-2 px-3 py-2 rounded-md mt-10 hover:bg-red-500 hover:text-white"
              onClick={() => dispatch(clearCart())}
            >
              Clear items
            </button>
          ) : null}
        </div>

        {/* right */}
        <div className="">
          {items.length === 0 ? null : (
            <SignedIn>
              <button
                className="bg-orange-300 px-3 py-2 rounded-md"
                onClick={createCheckoutSession}
                // onClick={() => {
                //   checkout({
                //     lineItems: items.map((item: any) => ({
                //       price: item.priceId,
                //       quantity: 1,
                //     })),
                //   })

                // }

                // }
              >
                Proceed to check out
              </button>
            </SignedIn>
          )}
          {items.length === 0 ? null : (
            <SignedOut>
              <SignInButton mode="modal" redirectUrl="/cart">
                <button className="bg-orange-300 px-3 py-2 rounded-md">
                  Please sign in to check out
                </button>
              </SignInButton>
            </SignedOut>
          )}
        </div>
      </div>

      {items.length === 0 && (
        <>
          <h1 className="text-center font-bold mt-10">
            Your shopping cart is empty
          </h1>

          <Link href={"/products"}>
            <button className="px-3 py-2 border-2 rounded-md w-40 block mx-auto mt-10">
              Browse Store
            </button>
          </Link>
        </>
      )}

      {/* Account */}
      <div className="flex justify-center space-x-20 pt-20 pb-20 px-5">
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

          <h1 className="text-sm lg:text-base">My Account</h1>
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

          <h1 className="text-sm lg:text-base">Track Orders</h1>
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

          <h1 className="text-sm lg:text-base">Shopping Bag</h1>
        </div>
      </div>
    </div>
  );
};

export default CheckOutProduct;
