// const ECC = require("extract-css-chunks-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",

  resolve: {
    extensions: [".js", ".css"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["linaria/loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  externals: {
    "linaria/react": "commonjs2 linaria/react",
    "memoizee/weak": "commonjs2 memoizee/weak"
  }
};
