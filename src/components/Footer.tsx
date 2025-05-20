
import React from "react";

const Footer = () => (
  <footer className="py-8 px-4 bg-maroon text-cream flex flex-col items-center gap-2">
    <div className="text-xl font-serif-heading font-bold tracking-widest drop-shadow">Karachi Sweet</div>
    <div className="flex flex-wrap gap-6 justify-center text-xs text-cream/60">
      <span>© 2024 Karachi Sweet</span>
      <span>Taste the Tradition, Savor the Sweetness</span>
      <span>Authenticity • Quality • Tradition • Craftsmanship</span>
    </div>
    <div className="mt-2 text-sm">
      <span>
        Contact: <a className="underline text-gold hover:text-rose" href="mailto:hello@karachisweet.com">hello@karachisweet.com</a>
      </span>
    </div>
  </footer>
);

export default Footer;
