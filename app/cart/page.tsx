import Link from "next/link";
import React from "react";
import CheckOutProduct from "../components/CheckOutProduct";


const Cart = () => {

  

  return (
   <div>
    <CheckOutProduct/>

      {/* Footer */}
      <footer className="bg-black text-center text-white h-40 pt-10">
        <h1>artlinesgraphicdesign</h1>
        <a href="#">Report Abuse</a>
      </footer>
   </div>
  );
};

export default Cart;
