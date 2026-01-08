import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";

const PRODUCT_PER_PAGE = 20;

type Props = {
  category?: string; // Custom field for category filtering
  limit?: number;
};

const ProductList = async ({ category, limit }: Props) => {
  const wixClient = await wixClientServer();

  // ✅ Query products
  let query = wixClient.products.queryProducts().limit(limit ?? PRODUCT_PER_PAGE);

  // ✅ Filter by category custom field if provided
  if (category) {
    query = query.eq("customFields.category", category);
  }

  const res = await query.find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          key={product._id}
          href={`/${product.slug}`}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/placeholder.png"}
              alt={product.name}
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">{product.name}</span>
            <span className="font-semibold">
              ${product.price?.price ?? "N/A"}
            </span>
          </div>

          {product.description && (
            <div className="text-sm text-gray-500 line-clamp-2">
              {product.description}
            </div>
          )}

          <button className="rounded-2xl w-max ring-1 ring-red-500 text-red-500 py-2 px-4 text-xs hover:bg-red-500 hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
