import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="h-[590px] w-full bg-[url('https://dhgf5mcbrms62.cloudfront.net/87104005/cover-JsJj8T/028dSS4-2000x2000.webp')] bg-cover bg-center">
      <div className="flex text-center items-center flex-col pt-10 lg:pt-32">
        <h1 className="text-4xl lg:text-[50px] font-bold pb-10 lg:pb-5">HIGH QUALITY MOCKUP</h1>
        <p className="text-lg ">Speed up your Work with this PSD Mockup! </p>
        <p className="text-base lg:text-lg lg:w-[900px]">
          This is yet another Mockup World exclusive! So, look forward to
          downloading these ten high-res PSD photo mockups. We put everything in
          this Mockup. All images may be used without restrictions in your
          private and commercial projects.
        </p>
        <Link href={'/products'}>
        <button className="bg-blue-400 px-5 py-2 rounded-md mt-14">Shop Now</button>
        </Link>
        
      </div>
      
    </div>
  );
};

export default Banner;
