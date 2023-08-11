import React from "react";
import FeaturedProducts from "./FeaturedProducts";

const Main = () => {
  return (
    <div className="bg-white text-black -mt-10">
      <div className="lg:w-[790px] mx-auto  text-center">
        <h1 className="text-4xl lg:text-[50px] font-bold pt-20 mb-10">
          WHAT IS MOCK UP
        </h1>
        <p className="text-base lg:text-lg pt-5">
          Mockups help to breathe life into your designs and present them in
          real-life settings. Basically, mockups are pre-created image templates
          that make it easy to seamlessly insert your own content into. Add your
          logo to letterheads, app designs to displays, messages to signs or
          advertising to the outsides a bus. Mockup World features a large
          number of clean as well as photo-realistic mockups.
        </p>
      </div>

      {/* What is mockup */}

      <div className="grid justify-items-center items-center gap-y-14 lg:grid-cols-2 max-w-7xl mx-auto pt-32">
        <img
          className="w-full lg:w-[590px]"
          src="/ZRpWy23-1200x1200.webp"
          alt=""
        />
        <div className="pl-0 lg:pl-5">
          <h1 className="text-4xl text-center lg:text-[50px] font-bold mb-10">
            USING MOCKUPS
          </h1>
          <p className="text-lg pb-5 font-bold text-center">
            Bring your design to life and impress your client{" "}
          </p>
          <p className="etext-base text-center lg:text-lg lg:w-[480px]">
            Ready to present your jersey design to the client? Forget about
            sending old-fashioned 2D files, instead create a memorable
            presentation with 3D mockups. With this mockups, you can create an
            eye-catching jersey presentation that helps the client understand
            your vision. Using this mockups, the result is a professional way of
            presenting your design idea.
          </p>
        </div>
      </div>

      {/* Featured products */}
      <FeaturedProducts />

      {/* Gcash Payment */}
      <div className="bg-[#2D7EF4] max-w-[1300px] mx-auto flex flex-col lg:flex-row-reverse justify-between mt-36 pb-10">
        <img
          className="w-[600px]"
          src="https://dhgf5mcbrms62.cloudfront.net/87104005/call-to-action-MZNu9K/BatYf6H-1200x1200.webp"
          alt=""
        />
        <div className="bg-[#2D7EF4] text-white pt-20 lg:pt-60 text-center lg:ml-20 space-y-5 lg:space-y-3 items-center">
          <h1 className="px-4 text-2xl lg:text-5xl lg:w-[500px]">
            Make fast and secure mobile payment with "GCASH"
          </h1>
          <p className="px-4 text-base lg:text-xl lg:w-[500px] ">
            We are now accepting G cash as one of out payment channels
          </p>
          <button className="border-2 border-white px-7 py-2 rounded-md hover:bg-white hover:text-blue-500">
            Shop Now
          </button>
        </div>
      </div>

      {/* Payment */}
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row lg:justify-between mt-20 lg:mt-36 space-y-10 lg:space-y-0 px-5 pb-10">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">Payment</h1>
          <p className="text-xl font-bold">
            We accept Visa, MasterCard®, PayPal , Gcash
          </p>
        </div>

        <div className="max-w-3xl space-y-10 text-lg">
          <p>
            When it comes to purchasing anything online, the security question
            towers above everything else. Our store’s overall cyber security and
            particularly the billing process security is something we do not
            take lightly. All of your shopping here will be a fun and safe
            experience.
          </p>
          <p>
            If you have any difficulties in the checkout process, you can always
            address our customer support department with your billing questions.
          </p>
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

export default Main;
