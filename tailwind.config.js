/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        'deep-navy': '#0A2540',
        'electric-teal': '#00C2A8',
        'off-white': '#F7F9FC',
        'charcoal': '#1A1A2E',
        'amber-gold': '#F5A623',
        'teal-light': '#E6FAF6',
        'charcoal-light': '#4A4A5A',
        'border-light': '#E2E8F0',
        'border-dark': 'rgba(255,255,255,0.1)',
        'overlay-dark': 'rgba(10, 37, 64, 0.85)',
        'footer-dark': '#071A2D',
        'whatsapp': '#25D366',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 2px 20px rgba(10, 37, 64, 0.06)',
        'card-hover': '0 8px 40px rgba(10, 37, 64, 0.1)',
        'float-teal': '0 4px 20px rgba(0, 194, 168, 0.3)',
        'nav': '0 2px 20px rgba(0, 0, 0, 0.08)',
        'whatsapp': '0 4px 20px rgba(37, 211, 102, 0.4)',
        'whatsapp-hover': '0 6px 28px rgba(37, 211, 102, 0.5)',
        'scroll-top': '0 2px 12px rgba(10, 37, 64, 0.1)',
        'highlighted': '0 4px 24px rgba(0, 194, 168, 0.12)',
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "shimmer": {
          "0%": { left: "-50%" },
          "100%": { left: "150%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.3" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "glow-flash": {
          "0%": { textShadow: "0 0 0px rgba(245, 166, 35, 0)" },
          "50%": { textShadow: "0 0 20px rgba(245, 166, 35, 0.5)" },
          "100%": { textShadow: "0 0 8px rgba(245, 166, 35, 0.3)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "glow-flash": "glow-flash 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}