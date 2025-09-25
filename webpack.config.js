const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced/webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const mfConfig = require("./module-federation.config.ts").mfConfig;

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/index.ts",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    port: 8099,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "src"),
      watch: true,
    },
  },
  output: {
    uniqueName: "break_fix",
    publicPath: "http://localhost:8099/",
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ],
            plugins: [isDev && require.resolve("react-refresh/babel")].filter(Boolean),
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin(mfConfig),
    isDev ? new ReactRefreshWebpackPlugin() : null,
  ].filter(Boolean),
  optimization: {
    minimize: !isDev,
  },
  mode: isDev ? "development" : "production",
};
