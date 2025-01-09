import Image from "next/image";
import React from "react";
import Link from "next/link";

const Follow: React.FC = () => {
  const images = [
    "/images/home/menu/image1.png",
    "/images/home/menu/image1.png",
    "/images/home/menu/image1.png",
    "/images/home/menu/image1.png",
    "/images/home/menu/image1.png",
    "/images/home/menu/image1.png",
    "/images/home/menu/image1.png",
    "/images/home/menu/image1.png",
  ];

  return (
    <section className="h-full w-full items-center justify-center px-4 py-12 md:px-32 md:py-24">
      <div className="flex w-full flex-col items-center justify-center gap-6 md:gap-28">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3 md:ml-16">
            <h6 className="text-center font-oswald text-xs font-[600] uppercase tracking-[1.98px] text-[#FBEAD2] md:text-start">
              Galley
            </h6>
            <h2 className="font-montserrat text-5xl font-[700] italic tracking-[1.8px] text-[#FFF4E3] md:text-5xl">
              follow us
            </h2>
          </div>
          <div className="border border-black bg-[#0A0A0A] px-6 py-3 md:mr-16">
            <Link
              href="/your-target-page"
              passHref
              className="flex flex-row items-center justify-center gap-4"
            >
              <Image
                src="/images/home/footer/insta.svg"
                alt="insta"
                width={41}
                height={42}
                className="cursor-pointer"
              />
              <span className="font-oswald text-xs font-[700] uppercase tracking-[1.98px] text-[#FBEAD2]">
                Check out our instagram
              </span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-4">
          {images.map((src, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="h-[280px] w-[280px] rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Follow;
