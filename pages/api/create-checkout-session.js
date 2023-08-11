import { urlFor } from "@/utils/client";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/utils/client";

const builder = imageUrlBuilder(sanityClient);

export default async function handler(req, res) {
  const { items, email } = req.body;
  const imageUrls = await Promise.all(
    items.map((item) => builder.image(item.productImage).url())
  );
  const itemTitles = await Promise.all(items.map((item) => item.title));
  const successUrlDev = process.env.SUCCESS_URL_DEV;
  const successUrlProd = process.env.SUCCESS_URL_PROD;
  const isDevMode = process.env.NODE_ENV === "development";
  const successUrl = isDevMode ? successUrlDev : successUrlProd;
  //console.log(imageUrls);

  const transformedItems = items.map((item, index) => ({
    description: item.title,
    quantity: 1,
    price_data: {
      currency: "php",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [imageUrls[index]],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems.map((item) => ({
      price_data: item.price_data,
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: successUrl,
    // success_url: `https://artlines-project.vercel.app/success`,
    cancel_url: `${req.headers.origin}/?canceled=true`,
    metadata: {
      title: itemTitles.join(","),
      email,
      images: imageUrls.join(","),
    },
  });

  res.status(200).json({ id: session.id });
}
