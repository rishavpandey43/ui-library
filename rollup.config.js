import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
        name: 'ui-lib',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      terser(),
      nodeResolve(),
    ],
  },
  {
    input: 'src/core/index.ts',
    output: [
      {
        file: 'core/index.js',
        format: 'cjs',
        sourcemap: false,
        name: 'ui-lib/core',
      },
      {
        file: 'dist/esm/core/index.js',
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      terser(),
      nodeResolve(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
  {
    input: 'dist/esm/types/core/index.d.ts',

    output: [{ file: 'core/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
