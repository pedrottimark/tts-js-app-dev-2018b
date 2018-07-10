const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/02-index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '02-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|gif)$/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      }
    ]
  }
};
