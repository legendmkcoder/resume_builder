/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#008B8B', // Dark Cyan
        background: '#F5F5F5', // Light Gray
        white: '#FFFFFF',
        coral: '#FF6F61',
        emerald: '#2ECC71',
        text: {
          DEFAULT: '#222',
          light: '#666',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
