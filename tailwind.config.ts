/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#135bec",
        accent: {
          emerald: "#10b981"
        },
        background: {
          light: "#f6f6f8",
          dark: "#0a0a0b"
        }
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px"
      }
    }
  },
  plugins: [
    
  ]
}
