"use client";
import React, { useEffect, useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderTop: React.FC = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="flex h-[0px] w-full items-center justify-center px-4 md:h-[52px] md:px-16">
      <div
        className={cn(
          "mb-2 flex w-full flex-row justify-between md:py-2",
          (isScrolled || pathname !== "/") && "hidden",
        )}
      >
        <div className="hidden flex-row items-center gap-2 md:flex md:gap-4">
          <Link
            href="https://maps.app.goo.gl/ZJMh1FpKoYa66F359"
            target="_blank"
            className="flex items-center gap-2 font-roboto text-xs font-[400] tracking-[0.48px] text-white"
          >
            <MapPin className="h-5 w-5 text-primary" />
            37 Main Road, Windermere LA23 1DX England
          </Link>
          <p className="flex items-center gap-2 font-roboto text-xs font-[400] tracking-[0.48px] text-white">
            <Clock className="h-5 w-5 text-primary" />
            Mon-Sat 11:00AM - 23:30PM, Sun 12:00PM - 23:00PM
          </p>
        </div>
        <div className="hidden flex-row items-center gap-2 md:flex md:gap-4">
          <Link
            href="tel:+441617955502"
            target="_blank"
            className="flex items-center gap-2 font-roboto text-xs font-[400] tracking-[0.48px] text-white"
          >
            <Phone className="h-5 w-5 text-primary" />
            0161 795 5502
          </Link>
          <Link
            href="mailto:cafeitalia@mail.com"
            target="_blank"
            className="flex items-center gap-2 font-roboto text-xs font-[400] tracking-[0.48px] text-white"
          >
            <Mail className="h-5 w-5 text-primary" />
            Cafe Italia@mail.com
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;
