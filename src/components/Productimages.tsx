"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: " https://images.pexels.com/photos/18678216/pexels-photo-18678216.jpeg",
  },
  {
    id: 2,
    url: " https://images.pexels.com/photos/35171115/pexels-photo-35171115.jpeg",
  },
  {
    id: 3,
    url: " https://images.pexels.com/photos/35159192/pexels-photo-35159192.jpeg",
  },
  {
    id: 4,
    url: " https://images.pexels.com/photos/18678216/pexels-photo-18678216.jpeg",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex justify-betweenmt-8 gap-4">
        {images.map((img, i) => (
          <div
            className="w-1/2 h-32 relative gap-4 mt-8"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
