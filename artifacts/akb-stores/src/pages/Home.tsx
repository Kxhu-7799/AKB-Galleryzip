import { Navbar } from "@/components/Navbar";
import { Hero3D } from "@/components/Hero3D";
import { Ticker } from "@/components/Ticker";
import { Collections } from "@/components/Collections";
import { Shop } from "@/components/Shop";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Commission } from "@/components/Commission";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero3D />
        <Ticker />
        <Collections />
        <Shop />
        <Process />
        <Testimonials />
        <Commission />
      </main>
      <Footer />
    </div>
  );
}