const path = require("path");

module.exports = {

    // Entry File
    entry: "./src/index.js",

    // Output Configuration
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    // Mode
    mode: "development"

};