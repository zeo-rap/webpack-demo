const commonConfig = require("./webpack.common");
const buildValidations = require("./build-validations");
const { merge } = require("webpack-merge");

module.exports = (env) => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  const envConfig = require(`./webpack.${env.env}.js`);
  const mergedConfig = merge(commonConfig, envConfig);
  console.log(mergedConfig);
  return mergedConfig;
};
