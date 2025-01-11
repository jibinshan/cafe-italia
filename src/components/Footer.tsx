import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer className="flex h-full w-full flex-col items-center justify-center gap-12 bg-black px-2 py-12">
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-4 md:gap-12">
        <div className="flex w-full flex-col items-center justify-center gap-12 md:mt-10 md:w-1/3">
          <Image src="/images/logo.png" width={188} height={57} alt="logo" />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/3 md:flex-row md:gap-20">
          <Button
            variant="link"
            className="font-600 w-fit items-center justify-start px-0 py-0 text-start font-manrope text-sm uppercase tracking-[0.96px] text-[#ABABAB] text-accent"
            asChild
          >
            <Link href="/menu">Home</Link>
          </Button>
          <Button
            variant="link"
            className="font-600 w-fit items-center justify-start px-0 py-0 text-start font-manrope text-sm uppercase tracking-[0.96px] text-[#ABABAB] text-accent"
            asChild
          >
            <Link href="/about-us">Menu</Link>
          </Button>
          <Button
            variant="link"
            className="font-600 w-fit items-center justify-start px-0 py-0 text-start font-manrope text-sm uppercase tracking-[0.96px] text-[#ABABAB] text-accent"
            asChild
          >
            <Link href="/contact">About</Link>
          </Button>
          <Button
            variant="link"
            className="font-600 w-fit items-center justify-start px-0 py-0 text-start font-manrope text-sm uppercase tracking-[0.96px] text-[#ABABAB] text-accent"
            asChild
          >
            <Link href="/table-booking">Contact</Link>
          </Button>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-4 md:w-1/3">
          <Link href="/your-target-page" passHref>
            <Image
              src="/images/home/footer/insta.svg"
              alt="insta"
              width={41}
              height={42}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/your-target-page" passHref>
            <Image
              src="/images/home/footer/site.svg"
              alt="site"
              width={33}
              height={27}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/your-target-page" passHref>
            <Image
              src="/images/home/footer/google.svg"
              alt="google"
              width={41}
              height={42}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/your-target-page" passHref>
            <Image
              src="/images/home/footer/fb.svg"
              alt="fb"
              width={42}
              height={42}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-center">
        <p className="w-fit px-4 text-center font-manrope text-sm font-[400] tracking-[0.84px] text-[#64615C]">
          © 2024 Istanbul Restaurant Manchester. All Rights Reserved |{" "}
          <Link
            href="https://foodo.ai"
            className="font-manrope text-sm font-[400] tracking-[0.84px] text-primary hover:underline"
          >
            Powered By Foodo
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
