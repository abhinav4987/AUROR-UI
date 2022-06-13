const postcss = require('rollup-plugin-postcss');
const svg = require('rollup-plugin-svg');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');


module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        sourceMap: true,
        // extract: true,
        minimize: true,
        inject: false,  
        extract: !!options.writeMeta,
        modules: true,
      }),
      svg({
        base64: false,
      })
    );
    return config;
  },
};