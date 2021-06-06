const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");
module.exports = {
  future: { webpack5: true },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "app1",
      library: {
        type: config.output.libraryTarget,
        name: "app1",
      },
      filename: "static/runtime/app1RemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./mario": "./components/mario",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = "https://mf-app1.vercel.app//_next/";
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};