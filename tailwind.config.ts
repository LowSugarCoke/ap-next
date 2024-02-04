import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
      },
      fontFamily: {
        'taipei': ['TaipeiHeiti', 'sans-serif'],
        'taipei-bold': ['TaipeiHeitiBold', 'sans-serif'],
        'taipei-light': ['TaipeiHeitiLight', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
