const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");
module.exports = {
  future: { webpack5: true },
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "app2",
      library: {
        type: config.output.libraryTarget,
        name: "app2",
      },
      filename: "static/runtime/app2RemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./luigi": "./components/luigi",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = "https://mf-app2.vercel.app//_next/";
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};