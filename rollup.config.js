import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';

export default {
	input: './src/index.ts',

	output: {
		file: './dist/uid.umd.js',
		format: 'umd',
		name: '@riim/uid'
	},

	plugins: [
		tslint(),
		typescript({ clean: true })
	]
};
