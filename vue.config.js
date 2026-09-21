const path = require("path");

module.exports = {
  devServer: {
    // The CV PDF lives at the repo root rather than in public/, so the dev
    // server has to be told about that one file; everything else under the
    // root is build output the dev server must not shadow.
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.get("/Konstantin_Khitrykh_CV.pdf", (_req, res) => {
        res.sendFile(path.resolve(__dirname, "Konstantin_Khitrykh_CV.pdf"));
      });
      return middlewares;
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "KonH's Page";
      return args;
    });
  },
  configureWebpack: {
    performance: {
      maxAssetSize: 500000, // Increase max asset size to 500KB
    },
  },
};
