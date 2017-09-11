import config from './rollup.config.js';

config.plugins.pop(); // remove uglify
config.targets = [
    {dest: 'dist/walas_angular_vendor.umd.js', format: 'umd'},
    {dest: 'dist/walas_angular_vendor.js', format:'es'} 
];
export default config;
