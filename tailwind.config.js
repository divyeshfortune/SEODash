const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    flowbite.content(),
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // DMSans: "'DMSans'"
      },
      colors: {
        primary: "#2952FF",
        secondary: "#3A4752",
        DustyBlue: "#768B9E",
        Crayola: "#B7C2CC",
        stroke: "#DBE1E6",
        WhisperGray: "#F6F8FA",
        SlateBlue: "#768B9E",
        
      },
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1536px",
        xxl: "1920px",
      },
      fontSize: {
        50: [
          "3.125rem",
          {
            lineHeight: "4.0625rem",
          },
        ],
        48: [
          "3rem",
          {
            lineHeight: "5rem",
          },
        ],
        40: [
          "2.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        48: [
          "3rem",
          {
            lineHeight: "3.39rem",
          },
        ],
        35: [
          "2.1875rem",
          {
            lineHeight: "2.875rem",
          },
        ],
        32: [
          "2rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        28: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        22: [
          "1.375rem",
          {
            lineHeight: "2rem",
          },
        ],
        21: [
          "1.3125rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        17: [
          "1.0625rem",
          {
            lineHeight: "1.4875rem",
          },
        ],
        16: [
          "1rem",
          {
            lineHeight: "1.6875rem",
          },
        ],
        15: [
          "0.9375rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "1.225rem",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    'tailwindcss',
    'postcss-flexbugs-fixes',
    'postcss-preset-env',
    [
      'postcss-normalize',
      {
        allowDuplicates: false,
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    'autoprefixer',
  ],
  plugins: [flowbite],
};
