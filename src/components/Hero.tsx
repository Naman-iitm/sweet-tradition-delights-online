
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image as placeholder for video */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(212,175,55,0.72)] via-[rgba(128,0,0,0.72)] to-[rgba(255,255,208,0.66)]" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif-heading font-extrabold text-gold drop-shadow-xl animate-fade-in tracking-tight">
          Karachi Sweet
        </h1>
        <span className="calligraphy text-rose text-xl md:text-2xl opacity-90 mb-1 animate-fade-in [animation-delay:.2s]">
          "Taste the Tradition, Savor the Sweetness"
        </span>
        <p className="mt-2 text-lg md:text-2xl font-body text-cream font-light max-w-xl animate-fade-in [animation-delay:.4s]">
          Authentic Pakistani sweets & desserts, crafted by hand since 1975.
        </p>
        <button
          className="mt-4 px-8 py-3 rounded-full text-xl font-bold font-serif-heading bg-gold text-maroon shadow-lg transition-transform duration-300 hover:scale-105 relative overflow-hidden animate-fade-in [animation-delay:.7s]"
          style={{
            background:
              "linear-gradient(90deg, #D4AF37 0%, #F4C430 60%, #FF007F 100%)",
            color: "#800000",
          }}
        >
          <span className="relative z-10">Explore Our Collection</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#fffdd08e] via-[#d4af3761] to-[#ff007e55] opacity-0 hover:opacity-80 pointer-events-none transition-opacity duration-300"></span>
        </button>
        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-cream/80">
          Authentic Pakistani Sweets Since 1975
        </span>
      </div>
    </section>
  );
};

export default Hero;
