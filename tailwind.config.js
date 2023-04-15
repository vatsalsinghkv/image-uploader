/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: 'var(--color-text)',
        'gray-1': 'var(--color-gray-1)',
        'gray-2': 'var(--color-gray-2)',
        'gray-3': 'var(--color-gray-3)',
        'text-inverse': 'var(--color-text-inverse)',
        'grad-1': 'var(--color-grad-1)',
        'grad-2': 'var(--color-grad-2)',
      },
      gridTemplateColumns: {
        'auto-320': 'repeat(auto-fit, minmax(320px, 1fr))',
      },
    },
  },
  plugins: [],
};
