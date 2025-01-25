"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
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
    <nav
      className={cn(
        `${position} top-5 z-50 flex h-[10vh] w-full flex-col items-center bg-transparent p-2 transition-all duration-0 ease-in-out md:top-8 md:p-2`,
        isScrolled && "bg-black",
        pathname !== "/" && "md:top-0"
      )}
    >
      <div className="flex w-full flex-col items-center justify-center md:px-14">
        <div className="flex h-full w-full flex-row items-center justify-between">
          <div className="hidden flex-row items-center justify-center gap-[3.48rem] md:flex">
            <Button
              asChild
              variant="link"
              className="font-m font- px-0 font-manrope text-sm font-[600] uppercase tracking-[1.05px] text-[#FFF] text-accent"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-manrope text-sm font-[600] uppercase tracking-[1.05px] text-[#FFF] text-accent"
            >
              <Link href="/menu">Menu</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-manrope text-sm font-[600] uppercase tracking-[1.05px] text-[#FFF] text-accent"
            >
              <Link href="/about-us">About</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-manrope text-sm font-[600] uppercase tracking-[1.05px] text-[#FFF] text-accent"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={177}
              height={101}
              alt="logo "
              className="h-15 w-24 md:mr-40 md:mt-1 md:h-20 md:w-36"
            />
          </Link>
          <div className="hidden items-center justify-center gap-[2.5rem] md:flex">
            <Link href="/table-booking">
              <Button
                className="group h-12 items-center gap-[1.19rem] rounded-none bg-[#ccad64] font-inter font-[600] uppercase tracking-[1.76px] text-[#282828] hover:bg-primary"
                variant="secondary"
              >
                Book Table
                <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <EqualizerIcon />
            </Button>
          </Sidebar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
