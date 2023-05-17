module.exports = {
  // ...existing configuration...

  devServer: {
    // ...existing devServer configuration...

    static: {
      directory: path.join(__dirname, 'public'),
    },
    devMiddleware: {
      // ...existing devMiddleware configuration...

      writeToDisk: true,
    },
    historyApiFallback: true,
  },
};
