
import React from "react";
import SweetCard from "./SweetCard";

// Images: These are high-quality Unsplash placeholders, but should be swapped with real product images later.
const sweets = [
  {
    category: "Milk-Based Sweets",
    anchor: "milk-based",
    items: [
      { name: "Rasmalai", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&h=300&w=320&q=80", price: "₹320 / 500g" },
      { name: "Gulab Jamun", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&h=300&w=320&q=80", price: "₹260 / 500g" },
      { name: "Rasgulla", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&h=300&w=320&q=80", price: "₹270 / 500g" },
      { name: "Cham Cham", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&h=300&w=320&q=80", price: "₹310 / 500g" },
      { name: "Kalakand", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&h=300&w=320&q=80", price: "₹350 / 500g" },
      { name: "Milk Cake", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&h=300&w=320&q=80", price: "₹300 / 500g" },
    ]
  },
  {
    category: "Dry Fruit Specialties",
    anchor: "dry-fruit",
    items: [
      { name: "Kaju Katli", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&h=300&w=320&q=80", price: "₹600 / 500g" },
      { name: "Badam Barfi", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&h=300&w=320&q=80", price: "₹620 / 500g" },
      { name: "Pista Roll", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&h=300&w=320&q=80", price: "₹680 / 500g" },
      { name: "Dry Fruit Ladoo", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&h=300&w=320&q=80", price: "₹540 / 500g" },
      { name: "Fig and Date Barfi", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&h=300&w=320&q=80", price: "₹700 / 500g" },
    ]
  },
  {
    category: "Regional Favorites",
    anchor: "regional",
    items: [
      { name: "Bengali Sandesh", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&h=300&w=320&q=80", price: "₹370 / 500g" },
      { name: "Mysore Pak", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&h=300&w=320&q=80", price: "₹390 / 500g" },
      { name: "Agra Petha", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&h=300&w=320&q=80", price: "₹350 / 500g" },
      { name: "Rajasthani Ghevar", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&h=300&w=320&q=80", price: "₹460 / 500g" },
      { name: "Odia Chhena Poda", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&h=300&w=320&q=80", price: "₹420 / 500g" },
    ]
  }
];

const SweetCategoriesSection = () => (
  <section className="max-w-7xl mx-auto mt-10 lg:mt-16 px-2 md:px-6">
    {sweets.map((cat) => (
      <div id={cat.anchor} key={cat.category} className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif-heading font-bold text-maroon mb-6 tracking-wide">{cat.category}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {cat.items.map(({ name, image, price }) => (
            <SweetCard
              key={name}
              name={name}
              image={image}
              price={price}
              // onAddToCart - future implementation
            />
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default SweetCategoriesSection;
