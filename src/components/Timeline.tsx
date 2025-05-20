
import React from "react";

const milestones = [
  { year: 1975, text: "Founded: Our first shop opens in Karachi" },
  { year: 1984, text: "Classic Barfi goes nationwide" },
  { year: 1997, text: "Innovating: Pistachio Roll introduced" },
  { year: 2005, text: "Awarded Best Mithai Shop" },
  { year: 2021, text: "Worldwide Online Orders Launched" },
];

const Timeline = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-white/60 to-pistachio/20 px-6 relative">
    <h2 className="text-3xl md:text-5xl font-serif-heading text-center font-bold text-maroon mb-8 animate-fade-in">
      Our Heritage Story
    </h2>
    <div className="max-w-3xl mx-auto">
      <ol className="relative border-l-4 border-gold ml-4">
        {milestones.map((item, idx) => (
          <li
            key={item.year}
            className="mb-10 ml-6 animate-fade-in"
            style={{ animationDelay: `${idx * 0.2 + 0.2}s` as string }}
          >
            <div className="absolute w-4 h-4 bg-gold rounded-full -left-6 top-2 shadow-lg border-2 border-white"></div>
            <time className="mb-1 text-lg font-semibold text-maroon">{item.year}</time>
            <p className="text-maroon/80 font-body">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Timeline;
