import Image from "next/image";
import React from "react";

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full px-4 py-12 md:py-24">
      <div className="flex flex-col gap-10 md:gap-16">
        <div>
          <p className="text-center font-inter text-sm font-[600] uppercase tracking-[1.76px] text-[#FBEAD2]">
            Our top picks this month
          </p>
          <h2 className="mt-4 text-center font-montserrat text-3xl font-[700] italic tracking-[1.8px] text-[#FFF4E3] md:text-5xl">
            Monthly{" "}
            <span className="text-center font-montserrat text-3xl font-[700] tracking-[1.8px] text-[#BC995D] md:text-5xl">
              Highlights
            </span>
          </h2>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-0">
          <div className="flex w-full flex-col items-center justify-center gap-3 md:w-1/4">
            <Image
              src="/images/home/menu/image1.png"
              alt="fb"
              width={444}
              height={598}
              className="h-[350px] w-[290px] rounded-3xl object-cover md:rounded-none"
            />
            <h5 className="text-center font-montserrat text-xl font-[600] tracking-[0.6px] text-[#FBEAD2]">
              Adana Kebab
            </h5>
            <span className="text-center font-inter text-sm font-[400] uppercase tracking-[2.16px] text-[#C99E5F]">
              € 120
            </span>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 md:w-1/4">
            <Image
              src="/images/home/menu/image1.png"
              alt="fb"
              width={444}
              height={598}
              className="h-[350px] w-[290px] rounded-3xl object-cover md:rounded-none"
            />
            <h5 className="text-center font-montserrat text-xl font-[600] tracking-[0.6px] text-[#FBEAD2]">
              Adana Kebab
            </h5>
            <span className="text-center font-inter text-sm font-[400] uppercase tracking-[2.16px] text-[#C99E5F]">
              € 120
            </span>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 md:w-1/4">
            <Image
              src="/images/home/menu/image1.png"
              alt="fb"
              width={444}
              height={598}
              className="h-[350px] w-[290px] rounded-3xl object-cover md:rounded-none"
            />
            <h5 className="text-center font-montserrat text-xl font-[600] tracking-[0.6px] text-[#FBEAD2]">
              Adana Kebab
            </h5>
            <span className="text-center font-inter text-sm font-[400] uppercase tracking-[2.16px] text-[#C99E5F]">
              € 120
            </span>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 md:w-1/4">
            <Image
              src="/images/home/menu/image1.png"
              alt="fb"
              width={444}
              height={598}
              className="h-[350px] w-[290px] rounded-3xl object-cover md:rounded-none"
            />
            <h5 className="text-center font-montserrat text-xl font-[600] tracking-[0.6px] text-[#FBEAD2]">
              Adana Kebab
            </h5>
            <span className="text-center font-inter text-sm font-[400] uppercase tracking-[2.16px] text-[#C99E5F]">
              € 120
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
