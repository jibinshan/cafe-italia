"use client";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = ({}) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".head-container", 1.5, {
      y: 50,
      opacity: 1,
      ease: "power4.out",
    })
      .from(".head-hero", 1, {
        y: 160,
        opacity: 0,
        delay: -0.5,
      })
      .from(".hero-button", 1, {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: -0.5,
      });
  }, []);
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/cafeitalia-18-banner.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/cafeitalia-preview.jpg"
          ></video>
        </div>
        <div className="z-40 flex h-full w-full max-w-[1300px] items-center justify-center">
          <div className="head-container flex w-fit flex-col items-center justify-center gap-16">
            <h1 className="head-hero text-center font-montserrat text-5xl font-[700] italic tracking-[-2.6px] text-[#FFF4E3] sm:text-5xl md:mr-10 md:text-8xl lg:leading-[110px]">
              Welcome To
              <br />
              Cafe Italia
            </h1>

            <Link href="/menu">
              <Button className="hero-button flex items-center justify-center gap-3 rounded-none px-7 py-7 font-inter text-sm font-[600] uppercase tracking-[1.76px]">
                View Menu <MoveRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
