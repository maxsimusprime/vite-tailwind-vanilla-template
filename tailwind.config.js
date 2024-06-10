/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        oswald: 'Oswald, sans-serif',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
  corePlugins: {
    // Disabling default core `container` plugin
    container: false,
  },
};
