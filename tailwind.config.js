import tailwindcssNoScrollbar from 'tailwindcss-no-scrollbar';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      extend: {},
  },
  plugins: [
      tailwindcssNoScrollbar, // For hiding scrollbars
  ],
};