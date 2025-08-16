const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/app.js',
  output: {
    // Output file configuration
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    // Directory for serving static files
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        // Rule for processing CSS files
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};