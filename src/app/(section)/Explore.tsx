import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Icons } from "@/components/Icon";

const Explore: React.FC = () => {
  return (
    <section className="h-full w-full px-4 py-12 md:px-32 md:py-24">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-14">
        <div className="flex flex-col gap-2">
          <p className="text-center font-inter text-xs font-[600] uppercase tracking-[1.76px] text-[#FBEAD2]">
            Explore menu
          </p>
          <h2 className="text-center font-montserrat text-3xl font-[700] italic tracking-[1.8px] text-[#FFF4E3] md:text-5xl">
            Our Menu
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-16">
          <div className="relative w-full rounded-3xl">
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
            <Image
              src="/images/home/menu/image1.png"
              alt="fb"
              width={444}
              height={598}
              className="h-[360px] w-[270px] rounded-3xl object-cover md:h-[440px] md:w-[390px] md:rounded-none"
            />

            <div className="absolute bottom-2 left-16 z-20 flex flex-col gap-4 text-center md:left-32">
              <h1 className="font-montserrat text-xl font-[700] text-[#FBEAD2]">
                Italian dishes
              </h1>
              <p className="font-manrope text-xs font-[600] tracking-[0.94px] text-[#D5A859]">
                View Menu
              </p>
            </div>
          </div>
          <div className="relative w-full rounded-3xl">
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
            <Image
              src="/images/home/menu/image2.png"
              alt="fb"
              width={444}
              height={598}
              className="h-[360px] w-[270px] rounded-3xl object-cover md:h-[440px] md:w-[390px] md:rounded-none"
            />

            <div className="absolute bottom-2 left-16 z-20 flex flex-col gap-4 text-center md:left-32">
              <h1 className="font-montserrat text-xl font-[700] text-[#FBEAD2]">
                Italian dishes
              </h1>
              <p className="font-manrope text-xs font-[600] tracking-[0.94px] text-[#D5A859]">
                View Menu
              </p>
            </div>
          </div>
          <div className="relative w-full rounded-3xl">
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
            <Image
              src="/images/home/menu/image3.png"
              alt="fb"
              width={444}
              height={598}
              className="h-[360px] w-[270px] rounded-3xl object-cover md:h-[440px] md:w-[390px] md:rounded-none"
            />

            <div className="absolute bottom-2 left-16 z-20 flex flex-col gap-4 text-center md:left-32">
              <h1 className="font-montserrat text-xl font-[700] text-[#FBEAD2]">
                Italian dishes
              </h1>
              <p className="font-manrope text-xs font-[600] tracking-[0.94px] text-[#D5A859]">
                View Menu
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/table-booking">
            <Button
              className="group h-12 items-center gap-[1.19rem] rounded-none bg-[#ccad64] font-inter font-[600] uppercase tracking-[1.76px] text-[#282828] hover:bg-primary"
              variant="secondary"
            >
              View Menu
              <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
