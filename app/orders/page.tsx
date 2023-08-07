import { SignInButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from "react";
import { currentUser } from '@clerk/nextjs';
import OrdersClientSide from "../components/OrdersClientSide";

const fetchOrders = async () => {
  
  
  const user = await currentUser()
  const admin = require("firebase-admin");
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const serviceAccount = require("../../artlines-579f5-firebase-adminsdk-b5r6a-fbd6955569.json");
  const app = !admin.apps.length
    ? admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      })
    : admin.app();

  //firesbase db orders
  if(!user) {
    return
  }
  const stripeOrders = await app
    .firestore()
    .collection("users")
    .doc(user?.emailAddresses[0].emailAddress)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order: any) => ({
      id: order.id,
      amount: order.data().amount,
      images: order.data().images,
      timestamp: order.data().timestamp.toDate(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return orders;
};

const Orders = async () => {
  // const { isLoaded, isSignedIn, user } = useUser();
  const orders = await fetchOrders();
  const user = await currentUser()
  console.log("orders", orders);
  //console.log(user?.emailAddresses[0].emailAddress)



  return (
    <div className=" bg-white text-black pb-20 min-h-screen">
    
      <OrdersClientSide orders={orders}/>
    </div>
  );
};

export default Orders;
