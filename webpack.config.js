const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  target: "node",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}