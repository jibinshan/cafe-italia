import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Special from "./(section)/(special)/Special";
import Experience from "./(section)/Experience";
import Glimpse from "./(section)/Glimpse";
import Hero from "./(section)/Hero";
import Menu from "./(section)/Menu";
import PrivateAndGroupDining from "./(section)/PrivateAndGroupDining";
import Reviews from "./(section)/Review";
import Map from "./(section)/Map";
import Contact from "./(section)/Contact";
import HeaderTop from "./(section)/HeaderTop";
import Explore from "./(section)/Explore";
import Highlights from "./(section)/Highlights";
import Follow from "./(section)/Follow";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000000]">
        <HeaderTop />
        <Navbar position="absolute" />
        <Hero />
        <Explore />
        <Experience />
        <Special />
        <Highlights />
        <PrivateAndGroupDining />
        <Reviews />
        <Follow />
        <Contact />
        <Footer />
      </div>
      <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
        <ViewMenu />
      </div>
    </main>
  );
}
