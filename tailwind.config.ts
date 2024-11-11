import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container : {
        center: true,
        padding: "15px"
      },
      spacing : {
        '10': '8.5rem',
      },
      colors: {
        accent: "#0099ff"
      },
    },
  },
  plugins: [],
} satisfies Config;