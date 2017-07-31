import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';

const NAMESPACE = require('./namespace.config.json').namespace;
const getModuleName = function(name) {
    return `${NAMESPACE}.${name}`;
};

export default {
    entry: 'src/vendor.js',
    dest: 'dist/vendor.js',
    format: 'umd',
    moduleName: getModuleName('Vendor'),
    plugins: [
        resolve(),
        builtins(),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            exclude: [
                'node_modules/**',
            ]
        }),
        uglify()
    ],
    sourceMap: false,
    sourceMapFile: 'dist/vendor.js.map'
};