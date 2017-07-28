import config from './rollup.config.js';

/**
 * Remove Uglify in case we want to 
 * debug the module in the explorer
 */
config.plugins.pop();
export default config;