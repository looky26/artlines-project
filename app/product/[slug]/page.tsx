'use client'

import ProductDetailComponent from "@/app/components/ProductDetailComponent";
import { sanityClient } from "@/utils/client";
import Link from "next/link";
import React from "react";

type PageProps = {
  params: {
    slug: string;
  };
};

const fetchProductDetailData = async (slug: string) => {
  const querySlug = `*[_type == 'products' && slug.current == $slug][0] {
      _id,
      title,
      productDescription,
      price,
      slug,
      priceId,
      productImage,
      "categories": categories[]->{
        title
      },
        
    }`;

  const productSlug = await sanityClient.fetch(querySlug, {
    slug: slug,
    cache: "force-cache",
  });
  return productSlug;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = `*[_type == 'product']
  {
    slug
  }
  `;
  const slugs = await sanityClient.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug.slug.current);
  return slugRoutes.map((slug: any) => ({
    slug: slug,
  }));
}

const ProductDetail = async ({ params: { slug } }: PageProps) => {
  const productSlug = await fetchProductDetailData(slug);
  console.log(productSlug);

  return (
    

    <div className="bg-white text-black">
      <ProductDetailComponent productSlug={productSlug} />

      {/* Account */}
      <div className="flex justify-center space-x-20 pt-20 pb-20">
        <div className="flex flex-col items-center space-y-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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

export default ProductDetail;
