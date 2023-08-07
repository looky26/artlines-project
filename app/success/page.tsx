"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../GlobalRedux/Features/cartSlice";
import Link from "next/link";


const Success = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(clearCart());
  }, []);

 
  return (
    <div className="flex justify-center pt-40 bg-white h-[100vh]">
      <div className="text-black">
        <h1 className="text-2xl">Thank you, your order has been confirmed!</h1>
        <p>Click the link below to download your purchased orders</p>
        <Link href={'/orders'}>
        <button  className="bg-orange-300 py-2 w-full rounded-md mt-10">Go to your orders</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
