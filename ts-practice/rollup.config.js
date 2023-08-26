import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
    input: 'index.ts',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [
        typescript({
            module: 'ESNext'
        }),
        resolve(),
        commonjs(),
    ]
}


