
import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

type SweetCardProps = {
  name: string;
  image: string;
  price: string;
  onAddToCart?: () => void;
  isAvailable?: boolean;
};

const SweetCard: React.FC<SweetCardProps> = ({
  name,
  image,
  price,
  onAddToCart,
  isAvailable = true,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col group bg-white border border-cream/30 rounded-xl shadow hover:shadow-lg overflow-hidden transition hover:-translate-y-1 hover:border-gold relative">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="aspect-square object-cover w-full transition-transform duration-300 group-hover:scale-110"
        />
        {!isAvailable && (
          <span className="absolute top-2 right-2 bg-rose text-white text-xs font-bold px-2 py-1 rounded shadow">
            Sold Out
          </span>
        )}
        <button
          className="absolute top-2 left-2 p-1 bg-white/90 rounded-full shadow transition"
          title={liked ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => setLiked((v) => !v)}
        >
          <Heart
            className={`w-5 h-5 ${liked ? "fill-rose text-rose" : "text-maroon"} transition-all`}
          />
        </button>
      </div>
      <div className="flex-1 flex flex-col px-3 py-2">
        <span className="font-serif-heading font-semibold text-gold text-base truncate">{name}</span>
        <span className="text-sm text-neutral-700 mb-2">{price}</span>
        <Button
          variant="secondary"
          size="sm"
          className="w-full mt-auto animate-fade-in"
          onClick={onAddToCart}
          disabled={!isAvailable}
        >
          <ShoppingCart className="mr-2 w-4 h-4" />
          {isAvailable ? "Add to Cart" : "Unavailable"}
        </Button>
      </div>
    </div>
  );
};

export default SweetCard;
