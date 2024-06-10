/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        // Add custom font. Using: font-poppins
        poppins: ['Poppins', 'sans-serif'],
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
