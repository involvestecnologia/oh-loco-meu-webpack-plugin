const path = require('path')
const OhLocoMeuWebpackPlugin = require('../index');

module.exports = {
  mode: 'production',
  entry: './index.js',
  target: "node",
  output: {
    filename: 'example.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new OhLocoMeuWebpackPlugin({ filesDir: './i18n' })
  ]
}