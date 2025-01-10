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
    <section className="flex h-[0px] w-full items-center justify-center px-4 md:h-[42px] md:px-16">
      <div
        className={cn(
          "flex w-full flex-row items-center justify-between md:py-2",
          (isScrolled || pathname !== "/") && "hidden",
        )}
      >
        <div className="hidden flex-row items-center gap-2 md:flex md:gap-4">
          <Link
            href="https://maps.app.goo.gl/ZJMh1FpKoYa66F359"
            target="_blank"
            className="flex items-center gap-2 font-roboto text-xs font-[400] tracking-[0.48px] text-[#DDD]"
          >
            <MapPin className="h-4 w-4 text-primary" />2 Bury Old Road,
            Manchester, M8 9JN
          </Link>
          <p className="flex items-center gap-2 font-roboto text-xs font-[400] tracking-[0.48px] text-[#DDD]">
            <Clock className="h-4 w-4 text-primary" />
            Mon-Sat 11am - 11:30pm, Sun 12pm - 11pm
          </p>
        </div>
        <div className="hidden flex-row items-center gap-2 md:flex md:gap-4">
          <Link
            href="tel:+441617955502"
            target="_blank"
            className="flex items-center gap-2 font-roboto text-xs font-[400] tracking-[0.48px] text-[#DDD]"
          >
            <Phone className="h-4 w-4 text-primary" />
            0161 795 5502
          </Link>
          <Link
            href="mailto:reservations@istanbulrestaurantmanchester.co.uk"
            target="_blank"
            className="flex items-center gap-2 font-roboto text-xs font-[400] tracking-[0.48px] text-[#DDD]"
          >
            <Mail className="h-4 w-4 text-primary" />
            reservations@istanbulrestaurantmanchester.co.uk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;
