module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust the path to your source files
    theme: {
      extend: {},
    },
    plugins: [
      require('tailwindcss-no-scrollbar'), // Add this plugin
    ],
  };