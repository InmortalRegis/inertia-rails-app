module.exports = {
  // Purge unused TailwindCSS styles
  purge: {
    enabled: ["production"].includes(process.env.NODE_ENV),
    content: [
      "./**/*.html.erb",
      "./app/helpers/**/*.rb",
      "./app/javascript/**/*.js",
    ],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "pickled-bluewood": "#2e4557",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
