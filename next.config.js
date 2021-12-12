let config = {
  reactStrictMode: true,
};

const isProd = process.env.NODE_ENV.toLowerCase() === "production";

if (isProd)
  config = {
    ...config,
    images: {
      loader: "imgix",
      path: "https://Pechenyice.github.io/",
    },
    basePath: "/deployNextToGHPages",
    assetPrefix: "/deployNextToGHPages",
  };

module.exports = config;
