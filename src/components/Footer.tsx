import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-16 py-20  md:px-8 lg:px-12 xl:px-32 2xl:px-64 bg-gray-100 text-sm">
      {/* TOP */}
      <div
        className="flex flex-col md:flex-row justify-between
       gap-30"
      >
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:h-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide font-md">NOZEELA</div>
          </Link>
          <p> Pachrukh-7, Sub metropolitian city Itahhari, Nepal</p>
          <span className="font-semibold">niteshpanday01@gmail.com</span>
          <span className="font-semibold">+977-9825959317</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden w-full lg:flex  justify-between">
          <div className="flex flex-col gap-6 ">
            <h1 className="font-md text-lg"> COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <h1 className="font-md text-lg"> HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg"> SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">men</Link>
              <Link href="">Women</Link>
              <Link href="">All Productss</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:h-1/4 flex flex-col gap-6">
          <h1 className="font-md text-lg">SUBSCIBE</h1>
          <p>Be the first person to get the latest news and much more!</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 bg-gray-50"
            />
            <button className="w-1/4 bg-[#F35C7A]  hover:bg-red-500 hover:text-white rounded-sm text-white">
              JOIN
            </button>
          </div>
          <span className="font-semibold">Secure Payment</span>
          <div className="flex justify-between">
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
        <div className="">! 2025 Nozeela Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">language</span>
            <span className="font-medium ">United State | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
