module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: __dirname + "/node_modules"
      }
    ]
  }
};
