import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg':"url('./src/assets/banner3.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}