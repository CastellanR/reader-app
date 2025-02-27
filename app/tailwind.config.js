import { heroui } from "@heroui/theme";
import tailwindcss from "@tailwindcss/vite";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      defaultTheme: "light",
    }),
    tailwindcss(),
  ],
};
