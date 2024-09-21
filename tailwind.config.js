/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    clipPath: {
      'top-right': 'circle(50% at 100% 0%)',
      'bottom-left': 'polygon(0 0, 100% 30%, 100% 100%, 0 100%)',
    },
  },
};
export const plugins = [];
