
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "gold": "#D4AF37",
        "maroon": "#800000",
        "cream": "#FFFDD0",
        "pistachio": "#93C572",
        "saffron": "#F4C430",
        "rose": "#FF007F",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#D4AF37",
          foreground: "#FFFDD0"
        },
        secondary: {
          DEFAULT: "#800000",
          foreground: "#FFFDD0"
        },
      },
      fontFamily: {
        'serif-heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'calligraphy': ['Noto Nastaliq Urdu', 'serif']
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "100%": { backgroundPosition: "200% center" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        shimmer: "shimmer 2s linear infinite"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
