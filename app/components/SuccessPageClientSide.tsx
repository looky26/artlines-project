'use client'
import Link from "next/link";
import React, { useEffect } from "react";
import { clearCart } from "../GlobalRedux/Features/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const SuccessPageClientSide = ({ expiredSessions }: any) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const isDevMode = process.env.NODE_ENV === "development";

  useEffect(() => {
    dispatch(clearCart());
    console.log(expiredSessions)
  }, []);

  

   //redirect to orders page if there is no new orders found
  useEffect(() => {
    if (expiredSessions.length > 0) {
      const redirectTimeout = setTimeout(() => {
        router.push("/orders");
      }, 2000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [expiredSessions]);

  if (expiredSessions.length > 0) {
    return (
      <div>
        <p>Loading...no new orders found</p>
        <p>Redirecting to your order history</p>
      </div>
    );
  } else {
    console.log("No expired sessions.");
  }

  if (isDevMode) {
    return (
      <div className="flex justify-center pt-40 bg-white h-[100vh]">
        <div className="text-black">
          <h1 className="text-2xl">
            Thank you, your order has been confirmed! This is Dev Mode
          </h1>
          <p>Click the link below to download your purchased orders</p>
          <Link href={"/orders"}>
            <button className="bg-orange-300 py-2 w-full rounded-md mt-10">
              Go to your orders
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center pt-40 bg-white h-[100vh]">
      <div className="text-black">
        <h1 className="text-2xl">Thank you, your order has been confirmed!</h1>
        <p>Click the link below to download your purchased orders</p>
        <Link href={"/orders"}>
          <button className="bg-orange-300 py-2 w-full rounded-md mt-10">
            Go to your orders
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPageClientSide;
