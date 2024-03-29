const { merge } = require('webpack-merge');
const createProductionCfgn = require('./webpack.common');

const mainFileName = require('./package.json').main;
const prodCfgn = createProductionCfgn(mainFileName);

const devCfgnOverrides = {
  mode: 'development',
  performance: {
    maxEntrypointSize: 2000 * 1000,
    maxAssetSize: 2000 * 1000,
  },
  output: {
    filename: 'dev.js',
    sourceMapFilename: "[file].map?[contenthash]",
  }
};

module.exports = merge(prodCfgn, devCfgnOverrides, {
  // Add project specific production configs & overrides here...
});
