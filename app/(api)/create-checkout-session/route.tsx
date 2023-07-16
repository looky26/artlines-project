import { urlFor } from "@/utils/client";
import { NextResponse } from "next/server";

const stripe = require("stripe")('sk_test_51NTrBSA3aTzlY3vKg3cz9TpbttQsTho4W6GXPWQgnXEcLOQBt1BOHSOM3Vorv7Iq9jnPBbQsIQopBc2pKEnGMhFt00rIx6QHZM');

export async function POST(request: Request) {
  const { items, email } = await request.json();
  //console.log(email);
  console.log(items);

const transFormedItems = items.map((item:any) =>({
    // description: null,
    price_data: {
        currency: 'php',
        unit_amount: item.price,
        product_data: {
            name: item.title,
            images: [urlFor(item.productImage).url()]
        },
    }
}))



const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transFormedItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cart',
    metadata: {
        email: email,
        images: JSON.stringify(items.map((item:any)=>urlFor(item.productImage).url()))
    }
})


  return new NextResponse(JSON.stringify({ id: session.id }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
