const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // You don't necessarily need a separate loader for HTML files
      // If you want, you can remove the html-loader from the previous configuration
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/staging_source/com.hpmv.static.pages/main.html', // Path to your HTML template
      filename: 'index.html', // Output HTML filename
    }),
    // Add more plugins as needed
  ],
  // Additional configurations as needed (resolve, etc.)
};
