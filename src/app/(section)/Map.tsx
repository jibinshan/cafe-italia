"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Map = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".branches-underline", {
      scrollTrigger: {
        trigger: ".branches-underline",
        toggleActions: "restart none none none",
      },
      scale: 1,
      duration: 1.5,
    });
  }, []);
  return (
    <section
      id="welcome"
      className="flex w-full items-center justify-center overflow-hidden"
    >
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-4 px-4 py-12 lg:min-h-[60vh] lg:px-0 lg:py-24">
        <div className="flex w-full">
          {/* <Image
                        src="/images/home/map/map.png"
                        width={1462}
                        height={597}
                        alt="map"
                    />
                    <Button className="hidden absolute rounded-full lg:flex flex-col h-fit lg:top-1/3 lg:left-1/2 px-2 py-2 lg:px-7 lg:py-7"><span>Get<br />Direction<br /></span> <ArrowUpRight /></Button> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.8230309737937!2d-2.905791!3d54.377776399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c94bdf14f0f37%3A0xc6e4f3f5b1086108!2sCafe%20Italia!5e0!3m2!1sen!2sin!4v1734280048340!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[500px] w-full grayscale invert hover:grayscale hover:invert"
          ></iframe>
        </div>
        <div className="flex w-full max-w-[1300px] flex-col gap-9 px-3 py-12 md:px-0 md:py-24">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <p className="w-full text-center font-oswald text-3xl md:text-5xl">
              Our Other <span className="text-primary">Branches</span>
            </p>
            <Image
              src="/images/underline.png"
              width={840}
              height={85}
              alt="underline"
              className="branches-underline w-60"
              style={{
                transform: "scale(0.5)",
              }}
            />
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full flex-col gap-6 py-6 md:w-1/2 md:px-24">
              <p className="w-full text-center font-oswald text-3xl">
                Cafe Italia
              </p>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-center">
                    37 Main Road, Windermere LA23
                    <br />
                    1DX England
                  </p>
                  <Link
                    href="https://maps.app.goo.gl/fNnP3wMjzsUQTnDj8"
                    target="_blank"
                    className="underline"
                  >
                    Get direction
                  </Link>
                </div>
                <div className="flex w-full justify-center gap-2">
                  <p className="font-semibold">Phone :</p>
                  <Link href="tel:+441615266562" target="_blank">
                    +441615266562
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
