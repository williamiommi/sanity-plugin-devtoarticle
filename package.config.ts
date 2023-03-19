import {defineConfig} from '@sanity/pkg-utils'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import path from 'path'

export default defineConfig({
  legacyExports: true,
  dist: 'dist',
  tsconfig: 'tsconfig.dist.json',
  rollup: {
    plugins: [
      postcss({
        extract: path.resolve('./dist/bundle.min.css'),
        minimize: true,
        plugins: [require('tailwindcss'), require('autoprefixer')],
      }),
      copy({
        targets: [
          {
            src: './node_modules/katex/dist/fonts/**/*',
            dest: path.resolve('./dist/fonts'),
          },
        ],
      }),
    ],
  },
  // Remove this block to enable strict export validation
  extract: {
    rules: {
      'ae-forgotten-export': 'off',
      'ae-incompatible-release-tags': 'off',
      'ae-internal-missing-underscore': 'off',
      'ae-missing-release-tag': 'off',
    },
  },
})
