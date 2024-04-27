import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        white_100: "#FAFAFA",

        black: "#232323",

        gray_500: "#909090",
        gray_300: "#B3B3B3",
        gray_200: "#E3E3E3",
        gray_100: "#EFEFEF",

        transparent_10: "#23232310",
        transparent_30: "#23232330",
        transparent_50: "#23232350",
        transparent_90: "#23232390",

        red_100: "#FF6878",
        red_500: "#FF4141",

        pink_100: "#FEAF88",

        blue_300: "#3897F0",

        yellow_500: "#F7BC01",

        green_100: "#f1f5eb",
        green_300: "#B9DB56",
        green_500: "#81BB26",

        background_color: " #FAFAFA",
        container_color: "#FEFEFE",

        text_primary_color: "#232323",
        text_secondary_color: "#FEFEFE",

        // Shadcn UI colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FAFAFA",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        green: {
          100: "#f1f5eb",
          300: "#B9DB56",
          500: "#81BB26",
        },
        gray: {
          300: "#B3B3B3",
        },
        yellow: {
          500: "#F7BC01",
        },
      },

      borderWidth: {
        tine: "1px",
        base: "1.5px",
      },

      fontSize: {
        h1: "5rem",
        h2: "2.8rem",
        h3: "2.5rem",
        h4: "2.4rem",
        h5: "2rem",
        h6: "1.8rem",
        large: "1.6rem",
        medium: "1.5rem",
        basic: "1.4rem",
        small: "1.3rem",
        mini: "1.2rem",
        micro: "1rem",
      },

      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      zIndex: {
        custom_pin: "5",
        search_bar: "30",
        bottom_sheet: "40",
        navigator: "50",
        mate_toggle_menu: "100",
        modal: "800",
        modal_background: "800",
        modal_layout: "850",
        spinner: "999",
      },

      fontFamily: {
        maplestory: [
          "Maplestory",
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
      },

      width: {
        max_width: "60rem",
      },

      // Shadcn UI style --
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      boxShadow: {
        sheet: "0px -2px 16px rgba(0, 0, 0, 0.3)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    // -- Shadcn UI style
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;

export default config;
