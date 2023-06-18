import Link from 'next/link'
import React from 'react'

const FeaturedProducts = () => {
  return (
    <div className="text-center pt-40">
    <h1 className="text-[50px] font-bold mb-5">FEATURED PRODUCTS</h1>
    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-10 lg:gap-5 justify-items-center items-center">
      <Link href={'/product/basketball-jersey-22'}  className="group">
        <img
          className="w-96 transition-transform duration-300 transform-gpu group-hover:scale-110"
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/87104005/3640699246.png"
          alt=""
        />
        <div className="space-y-4">
          <h1>BASKETBALL JERSEY 22</h1>
          <p>Php500.00</p>
          <button className="border-solid border-2 border-black px-16 py-2 rounded-md hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </Link>
      <Link href={'/product/poloshirt-2-buttons'} className="pt-2 group">
        <img
          className="w-96 transition-transform duration-300 transform-gpu group-hover:scale-110"
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/87104005/3605872073.png"
          alt=""
        />
        <div className="space-y-4">
          <h1>POLOSHIRT 2 BUTTONS</h1>
          <p>Php300.00</p>
          <button className="border-solid border-2 border-black px-16 py-2 rounded-md hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </Link>
      <Link href={`/product/tshirt-1`} className="group ">
        <img
          className="w-96 transition-transform duration-300 transform-gpu group-hover:scale-110"
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/87104005/3605865359.png"
          alt=""
        />
        <div className="space-y-4">
          <h1>TSHIRT 1</h1>
          <p>Php300.00</p>
          <button className="border-solid border-2 border-black px-16 py-2 rounded-md hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </Link>
      <Link href={`/product/jogger-pants`} className="pt-3 group">
        <img
          className="w-96 h-[385px] transition-transform duration-300 transform-gpu group-hover:scale-110"
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/87104005/3604454217.png"
          alt=""
        />
        <div className="space-y-4">
          <h1>JOGGER PANTS</h1>
          <p>Php300.00</p>
          <button className="border-solid border-2 border-black px-16 py-2 rounded-md hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </Link>
      <Link href={`/product/esports-jersey`} className="group">
        <img
          className="w-96 transition-transform duration-300 transform-gpu group-hover:scale-110"
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/87104005/3605763444.png"
          alt=""
        />
        <div className="space-y-4">
          <h1>ESPORTS JERSEY</h1>
          <p>Php300.00</p>
          <button className="border-solid border-2 border-black px-16 py-2 rounded-md hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </Link>
      <Link href={`/product/track-jacket`} className="pt-3 group">
        <img
          className="w-96 transition-transform duration-300 transform-gpu group-hover:scale-110"
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/87104005/3605888075.png"
          alt=""
        />
        <div className="space-y-4">
          <h1>TRACK JACKET</h1>
          <p>Php300.00</p>
          <button className="border-solid border-2 border-black px-16 py-2 rounded-md hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </Link>
    </div>
    {/* last 2 products */}
    <div className="grid lg:grid-cols-2 justify-items-center items-center lg:w-[800px] mx-auto pt-5">
      <Link href={`/product/facemask`} className="pt-3 group">
        <img
          className="w-96 transition-transform duration-300 transform-gpu group-hover:scale-110"
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/87104005/3608152705.png"
          alt=""
        />
        <div className="space-y-4 ">
          <h1>FACEMASK</h1>
          <p>Php150.00</p>
          <button className="border-solid border-2 border-black px-16 py-2 rounded-md hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </Link>
      <Link href={`/product/twill-cap`} className="pt-[121px] group">
        <img
          className="w-96 transition-transform duration-300 transform-gpu group-hover:scale-110"
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/87104005/3608260762.png"
          alt=""
        />
        <div className="space-y-4 ">
          <h1>TWILL CAP</h1>
          <p>Php300.00</p>
          <button className="border-solid border-2 border-black px-16 py-2 rounded-md hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default FeaturedProducts