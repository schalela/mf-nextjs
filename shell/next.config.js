const path = require("path");
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
      name: "shell",
      library: {
        type: config.output.libraryTarget,
        name: "shell",
      },
      filename: "static/runtime/remoteEntry.js",
      remotes: {
        app1: isServer
          ? path.resolve(
              __dirname,
              "../app1/.next/server/chunks/static/runtime/app1RemoteEntry.js"
            )
          : "app1",
        app2: isServer
          ? path.resolve(
              __dirname,
              "../app2/.next/server/chunks/static/runtime/app2RemoteEntry.js"
            )
          : "app2", 
      },
      exposes: {
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = "https://mf-shell.vercel.app/_next/";
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};