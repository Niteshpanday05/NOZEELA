import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds,categoryId")
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/18762532/pexels-photo-18762532.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-800"
          />
          <Image
            src="https://images.pexels.com/photos/35235308/pexels-photo-35235308.jpeg"
            alt=""
            fill
            sizes="25vw "
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Perfect one for your summer</div>
        <button className="rounded-2xl w-max ring-1 ring-red-500 text-red-500 py-2 px-4 text-xs hover:bg-red-500 hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/9007146/pexels-photo-9007146.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-800"
          />
          <Image
            src="https://images.pexels.com/photos/3772506/pexels-photo-3772506.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Perfect one for your summer</div>
        <button className="rounded-2xl w-max ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/33933257/pexels-photo-33933257.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-800"
          />
          <Image
            src="https://images.pexels.com/photos/35235308/pexels-photo-35235308.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Perfect one for your summer</div>
        <button className="rounded-2xl w-max ring-1 ring-red-500 text-red-500 py-2 px-4 text-xs hover:bg-red-500 hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/27503503/pexels-photo-27503503.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-800"
          />
          <Image
            src="https://images.pexels.com/photos/35235308/pexels-photo-35235308.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          Perfect one for your summer.
        </div>
        <button className="rounded-2xl w-max ring-1 ring-red-500 text-red-500 py-2 px-4 text-xs hover:bg-red-500 hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
