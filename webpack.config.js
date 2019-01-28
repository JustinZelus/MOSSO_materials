const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const autoprefixer = require("autoprefixer");
const isDevelopment = false;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist/public"),
    publicPath: "/"
    // filename: "./public/app.bundle.js",
    // path: __dirname
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": isDevelopment ? '"development"' : '"production"',
      "process.env.BROWSER": JSON.stringify(true),
      __isBrowser__: true
    }),
    new CopyWebpackPlugin([
      { from: "./public/", to: path.resolve(__dirname, "dist/public") }
    ]),
    new HtmlWebPackPlugin({
      template: "./src/boilerplate.html",
      filename: "index.html"
    }),
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment
        ? "assets/css/[name].css"
        : "assets/css/style.[hash].css"
      // publicPath: "/"
    })
    // new CleanWebpackPlugin(["dist"])
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/transform-runtime"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          { loader: "css-loader" },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return require("precss"), [require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        // test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, "")
        }
      }
    ]
  }
  // optimization: {
  //   minimizer: [new TerserPlugin()]
  // }
};

const serverConfig = {
  entry: "./src/www.js",
  target: "node",
  output: {
    filename: "server.bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/",
    // path: __dirname,
    libraryTarget: "commonjs2"
  },
  node: {
    __filename: true,
    __dirname: true
  },
  externals: [nodeExternals()],
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": isDevelopment ? '"development"' : '"production"',
      "process.env.BROWSER": JSON.stringify(false),
      __isBrowser__: false
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  corejs: false,
                  helpers: true,
                  regenerator: true,
                  useESModules: false
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "css-loader/locals"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        // test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, ""),
          emit: false
        }
      }
    ]
  }
  // optimization: {
  //   minimizer: [new TerserPlugin()]
  // }
};

module.exports = [browserConfig, serverConfig];
