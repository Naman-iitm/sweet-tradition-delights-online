
import React from "react";
import { Heart, ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Milk-Based Sweets", href: "#milk-based" },
  { name: "Dry Fruit Specialties", href: "#dry-fruit" },
  { name: "Regional Favorites", href: "#regional" },
];

const Navbar = () => (
  <nav className="sticky top-0 w-full z-30 bg-cream/80 backdrop-blur flex items-center justify-between px-3 md:px-8 py-3 shadow-sm">
    <div className="flex items-center gap-2">
      <img
        src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=facearea&w=48&h=48"
        alt="logo"
        className="rounded-full w-10 h-10 object-cover border-2 border-gold shadow"
      />
      <span className="text-maroon font-serif-heading text-xl sm:text-2xl font-extrabold tracking-widest">
        Karachi Sweet
      </span>
    </div>
    <div className="hidden md:flex items-center gap-6">
      <a href="#about" className="hover:text-gold transition font-semibold">About Us</a>
      <div className="relative group">
        <button className="font-semibold hover:text-gold flex items-center gap-1 transition">
          Category
          <Menu className="w-4 h-4" />
        </button>
        <div className="absolute left-0 mt-7 w-52 rounded shadow bg-cream border border-gold py-1 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-40">
          {categories.map((cat) => (
            <a key={cat.name} href={cat.href} className="block px-4 py-2 hover:bg-gold/10 transition">
              {cat.name}
            </a>
          ))}
        </div>
      </div>
      <a href="#blog" className="hover:text-gold transition font-semibold">Blog</a>
    </div>
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="icon" aria-label="Wishlist">
        <Heart className="text-maroon" />
      </Button>
      <Button variant="ghost" size="icon" aria-label="Cart">
        <ShoppingCart className="text-maroon" />
      </Button>
      <Button variant="ghost" size="icon" aria-label="User Menu">
        <User className="text-maroon" />
      </Button>
    </div>
  </nav>
);

export default Navbar;
