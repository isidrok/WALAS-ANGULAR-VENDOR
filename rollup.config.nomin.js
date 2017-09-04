import config from './rollup.config.js';

config.plugins.pop(); // remove uglify
config.dest = 'dist/walas_angular_vendor.js';
config.sourceMapFile = 'dist/walas_angular_vendor.js.map';

export default config;
