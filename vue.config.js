module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "KonH's Page";
      return args;
    });
  },
  configureWebpack: {
    performance: {
      maxAssetSize: 500000 // Increase max asset size to 500KB
    }
  }
};
