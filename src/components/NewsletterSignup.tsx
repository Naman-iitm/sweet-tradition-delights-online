
import React, { useState } from "react";

const NewsletterSignup = () => {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section className="py-16 px-3 bg-gradient-to-r from-cream via-gold/10 to-pistachio/10 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-serif-heading text-maroon font-semibold mb-3 animate-fade-in">
        Join the Sweet Society
      </h2>
      <p className="text-md text-maroon mb-4 animate-fade-in">
        Sign up & get a special offer for first-time subscribers!
      </p>
      <form
        className="flex flex-col gap-3 sm:flex-row items-center animate-fade-in"
        onSubmit={onSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="rounded-full px-5 py-3 border-2 border-pistachio bg-white font-body text-maroon focus:ring-2 focus:ring-gold outline-none min-w-[220px] transition"
          required
        />
        <button
          type="submit"
          className="rounded-full px-6 py-3 font-bold font-serif-heading bg-gold text-maroon shadow-lg hover:bg-rose hover:text-white transition-all duration-300"
        >
          {submitted ? (
            <span>🍬 Added!</span>
          ) : (
            <span>Subscribe</span>
          )}
        </button>
      </form>
      {submitted && (
        <div className="mt-6 text-pistachio animate-fade-in transition">
          <div className="inline-flex items-center gap-2 text-lg">
            <span>✨ Welcome! Your sweet box is on its way.</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsletterSignup;
