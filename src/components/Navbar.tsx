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
        `${position} top-5 z-50 flex h-[10vh] w-full flex-col items-center bg-transparent p-2 transition-all duration-0 ease-in-out md:top-10 md:p-4`,
        isScrolled && "bg-black",
      )}
    >
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-2">
        <div className="flex h-full w-full items-center justify-between">
          <div className="hidden flex-row items-center justify-center gap-[3.48rem] md:flex">
            <Button
              asChild
              variant="link"
              className="font-m font- font-manrope px-0 text-sm font-[600] uppercase tracking-[1.05px] text-accent text-white"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="font-manrope px-0 text-sm font-[600] uppercase tracking-[1.05px] text-accent text-white"
            >
              <Link href="/menu">Menu</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="font-manrope px-0 text-sm font-[600] uppercase tracking-[1.05px] text-accent text-white"
            >
              <Link href="/about-us">About</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="font-manrope px-0 text-sm font-[600] uppercase tracking-[1.05px] text-accent text-white"
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
              className="md:h-25 h-15 w-24 md:w-40"
            />
          </Link>
          <div className="hidden items-center justify-center gap-[2.5rem] md:flex">
            <Link href="/table-booking">
              <Button
                className="font-inter group h-12 items-center gap-[1.19rem] rounded-none bg-[#ccad64] font-[600] uppercase tracking-[1.76px] text-[#282828] hover:bg-primary"
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
