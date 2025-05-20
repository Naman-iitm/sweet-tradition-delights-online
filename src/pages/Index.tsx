
import Hero from "../components/Hero";
import FeaturedCarousel from "../components/FeaturedCarousel";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDD0]">
      <header className="w-full bg-transparent pt-5 pb-1 px-3 flex items-center justify-center z-20">
        <div className="flex items-center gap-2">
          <span className="text-maroon font-serif-heading text-2xl md:text-4xl font-extrabold tracking-widest shadow">{`✦ Karachi Sweet ✦`}</span>
        </div>
      </header>
      <main className="flex-1 flex flex-col">
        <Hero />
        <FeaturedCarousel />
        <Timeline />
        <Testimonials />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
