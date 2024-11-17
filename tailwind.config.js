/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: 10
    },
    extend: {
      colors: {
        border: 'hsl(0, 0%, 80%)',
        muted: 'hsl(0, 0%, 60%)',
      }
    },
  },
  plugins: [],
}

