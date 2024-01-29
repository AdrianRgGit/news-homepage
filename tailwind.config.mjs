/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "orange-1": "hsl(35, 77%, 62%)",
        "red-1": "hsl(5, 85%, 63%)",

        // Neutral
        "white-1": "hsl(36, 100%, 99%)",
        "gray-1": "hsl(233, 8%, 79%)",
        "gray-2": "hsl(236, 13%, 42%)",
        "dark-blue-1": "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
