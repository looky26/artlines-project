"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../GlobalRedux/Features/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Success = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [hasPayment, setHasPayment] = useState(false);
  const isDevMode = process.env.NODE_ENV === "development";

  const successUrl = isDevMode
    ? "https://localhost:3000/success"
    : "https://artlines-project.vercel.app/success";

  useEffect(() => {
    dispatch(clearCart());

    // const fetchPaymentStatus = async () => {
    //   try {
    //     const response = await fetch("https://localhost:3000/api/webhook"); // Replace with your API endpoint
    //     const data = await response.json();
    //     setHasPayment(data.hasPayment);
    //     console.log("fetching paymentData", data);
    //   } catch (error) {
    //     console.error("Error fetching payment status:", error);
    //   }
    // };

    // fetchPaymentStatus();
  }, []);

  // redirect to orders page if there is no new orders found
  // useEffect(() => {
  //   if (!hasPayment) {
  //     const redirectTimeout = setTimeout(() => {
  //       router.push("/orders");
  //     }, 2000);

  //     return () => clearTimeout(redirectTimeout);
  //   }
  // }, [hasPayment]);

  // if (!hasPayment) {
  //   return (
  //     <div>
  //       <p>Loading...no new orders found</p>
  //       <p>Redirecting to your order history</p>
  //     </div>
  //   );
  // }

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

export default Success;
