
import React from "react";
import { Star, StarHalf } from "lucide-react";

// Placeholder testimonials
const reviews = [
  {
    name: "Ayesha K.",
    stars: 5,
    review: "Absolutely divine! Reminds me of childhood Eid mornings.",
    img: "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    name: "S. Rahman",
    stars: 4.5,
    review: "Unmatched quality—Barfi that melts in your mouth!",
    img: "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    name: "Preeti G.",
    stars: 5,
    review: "Their packaging and freshness is the best I've seen.",
    img: "https://randomuser.me/api/portraits/women/88.jpg"
  }
];

const StarGlitter = ({ full = true }) =>
  full ? (
    <Star className="inline-block text-gold drop-shadow transition group-hover:scale-125" size={20} />
  ) : (
    <StarHalf className="inline-block text-gold drop-shadow" size={20} />
  );

const Testimonials = () => (
  <section className="py-16 bg-gradient-to-b from-cream/80 to-white">
    <h2 className="text-3xl md:text-5xl font-serif-heading text-center font-bold text-maroon mb-8 animate-fade-in">
      Customer Reviews
    </h2>
    <div className="flex justify-center gap-10 flex-wrap md:flex-nowrap">
      {reviews.map((r, i) => (
        <div
          key={r.name}
          className="relative bg-white border border-gold rounded-2xl shadow-lg p-6 max-w-xs min-h-[240px] flex flex-col items-center animate-fade-in"
          style={{ animationDelay: `${0.15 + i * 0.1}s` as string }}
        >
          <img
            src={r.img}
            alt={r.name}
            className="w-16 h-16 object-cover rounded-full border-2 border-gold shadow-lg -mt-10 mb-2"
          />
          <div className="flex gap-1 mb-1 group">
            {Array.from({ length: Math.floor(r.stars) }).map((_, k) => (
              <StarGlitter key={k} />
            ))}
            {r.stars % 1 !== 0 && <StarGlitter full={false} />}
          </div>
          <p className="text-md text-maroon/90 mb-2 font-body text-center italic">"{r.review}"</p>
          <span className="font-bold text-rose text-sm">{r.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
