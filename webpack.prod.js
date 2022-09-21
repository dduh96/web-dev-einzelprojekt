const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  mode: 'production',
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well

  entry: {
    index: path.resolve(__dirname, './src/index.ts'),
    join: path.resolve(__dirname, './src/scripts/join-page.ts'),
    api: path.resolve(__dirname, './src/scripts/api.ts'),
  },
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  // 4
  // Add plugins for webpack here
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Britney 4eva',
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Britney 4eva',
      filename: 'pages/join-page.html',
      template: path.resolve(__dirname, './src/pages/join-page.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Britney 4eva',
      filename: 'pages/api.html',
      template: path.resolve(__dirname, './src/pages/api.html'),
    }),
    new WebpackObfuscator({ stringArrayRotate: true, }),
  ],
  // 5
  // Integrate Babel in the build process
  // Define which files to use the loader
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/, // files to exclude
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/, // load files that end with scss and css
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      { // define typescript loader and file extensions
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    // options for resolving module requests
    extensions: ['*', '.js', '.ts'], // files to load
  },
};
