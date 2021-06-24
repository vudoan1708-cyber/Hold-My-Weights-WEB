// @ is alias to the src folder
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    },
  },
};
