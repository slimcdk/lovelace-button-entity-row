const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    filename: 'button-entity-row.js',
    path: path.resolve(__dirname)
  }
};