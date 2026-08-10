const path = require("path");

module.exports = {
  mode: "development", // Change to "production" for optimized builds
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};