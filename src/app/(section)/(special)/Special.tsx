"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(max-width:690px)", () => {
      gsap.to(".special-description", {
        scrollTrigger: {
          trigger: ".special-description",
          toggleActions: "restart none none none",
        },
        x: 0,
      });
    });

    mm.add("(min-width:691px)", () => {
      gsap.to(".special-description", {
        scrollTrigger: {
          trigger: ".special-description",
          toggleActions: "restart none none none",
        },
        x: 30,
        duration: 2,
      });
    });

    gsap.to(".special-title", {
      scrollTrigger: {
        trigger: ".special-title",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 30,
      duration: 1.5,
    });

    const splitType = document.querySelectorAll(".special-head");
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });

    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e, "===e");
    // })

    // const raf = (time: number) => {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    // return () => {
    //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
    // };
  }, []);
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070707]">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <h3 className="special-title -ml-[50px] font-inter text-sm font-[600] uppercase italic tracking-[1.76px] text-[#FBEAD2]">
          Our Menu
        </h3>
        <h1 className="special-head mb-4 max-w-[600px] text-center font-montserrat text-5xl font-[700] italic tracking-[-1.08px] text-[#FFF4E3] md:mb-16 md:text-6xl">
          Our <span className="text-primary">Specials</span>
        </h1>

        {modelData && (
          <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
            <EmblaCarousel slides={modelData} options={OPTIONS} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Special;
