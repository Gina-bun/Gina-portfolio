// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, theme }) {
      for (const [name, size] of Object.entries(theme('screens'))) {
        addVariant(`min-${name}`, `@media (min-width: ${size})`);
        addVariant(`max-${name}`, `@media not all and (min-width: ${size})`);
      }
    }),
  ],
};

module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        galaxy: ["GalaxyGirl", "monospace"],
      },
    },
  },
  plugins: [],
};
