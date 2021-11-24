const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.ts',
  module: {
    rules: [
      // Compile TypeScript to JavaScript.
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: 'ts-loader',
            // Tell TypeScript that the input should be parsed as TypeScript,
            // not JavaScript: <https://stackoverflow.com/a/47343106/14637>
            options: { appendTsSuffixTo: [/\.txt$/] },
          },
          path.resolve('txt-loader.js'),
        ],
      },
    ],
  },
}
