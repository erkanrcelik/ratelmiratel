/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // AjansRatel ana rengi
        "ajans-bg": "#04000d",
        "ajans-bg-dark": "#020008",
        "ajans-bg-light": "#0a0a2e",
        // Mor tema renkleri
        "purple-primary": "#a855f7",
        "purple-secondary": "#9333ea",
        "purple-accent": "#c084fc",
        "violet-primary": "#8b5cf6",
        "violet-secondary": "#7c3aed",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
};
