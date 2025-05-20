
import React from "react";
// Using basic carousel for now. Can integrate Embla or Swiper for 3D later.
const featured = [
  {
    name: "Barfi",
    desc: "Rich, creamy milk fudge, adorned with silver leaf.",
    img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80",
    bg: "from-cream to-gold"
  },
  {
    name: "Gulab Jamun",
    desc: "Golden dough balls soaked in saffron syrup.",
    img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80",
    bg: "from-rose to-saffron"
  },
  {
    name: "Pista Roll",
    desc: "Pistachio and milk rolled sweets, a Karachi favorite.",
    img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&q=80",
    bg: "from-pistachio to-cream"
  }
];

const FeaturedCarousel: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-cream/90 to-rose/10">
      <h2 className="text-3xl md:text-5xl font-serif-heading font-extrabold text-maroon mb-8 text-center animate-fade-in">
        Featured Sweets
      </h2>
      <div className="flex gap-6 justify-center flex-wrap md:flex-nowrap">
        {featured.map((item, idx) => (
          <div
            key={item.name}
            className={`relative group w-full max-w-xs p-0.5 rounded-xl shadow-xl 
              bg-gradient-to-r ${item.bg}
              transition-transform hover:scale-105 duration-300 min-h-[370px] animate-fade-in`}
            style={{ animationDelay: `${0.1 + idx * 0.1}s` as string }}
          >
            <div className="bg-white rounded-xl p-5 flex flex-col items-center min-h-[350px] relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-gold mb-3 group-hover:scale-110 duration-300"
              />
              <h3 className="text-xl font-serif-heading font-bold text-maroon group-hover:text-gold transition">
                {item.name}
              </h3>
              <p className="text-md text-rose/80 font-body mt-1 group-hover:text-maroon min-h-[44px] text-center transition">
                {item.desc}
              </p>
              {/* Quick Add button */}
              <button className="mt-5 px-5 py-2 rounded-full bg-gold text-maroon font-bold font-serif-heading shadow hover:bg-rose hover:text-white transition-all duration-300 text-base">
                Quick Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCarousel;
