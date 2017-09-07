import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const NAMESPACE = require('./namespace.config.json').namespace;
const getModuleName = function(name) {
    return `${NAMESPACE}.${name}`;
};

export default {
    entry: 'src/index.js',
    dest: 'dist/walas_angular_vendor.min.js',
    format: 'umd',
    exports: 'named', // let rollup know that we are exporting several things
    moduleName: getModuleName('walasAngularVendor'),
    onwarn : (warning) => {
        /**
         * There are several conflicting namespaces due to multiple angular modules
         * exporting the same variables, therefore we avoid loggin those warnings.
         */
        if(warning.code !== 'NAMESPACE_CONFLICT'){
            console.warn(warning.message);
        }
    },
    plugins: [
        resolve(),
        commonjs({
            include: 'node_modules/**'  
        }),
        babel({
            exclude: [
                'node_modules/**',
            ]
        }),
        uglify()
    ],
    sourceMap: true,
    sourceMapFile: 'dist/walas_angular_vendor.min.js.map'
};