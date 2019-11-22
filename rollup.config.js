import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';

export default {
	input: './src/nextUID.ts',

	output: {
		file: './dist/nextUID.umd.js',
		format: 'umd',
		name: '@riim/next-uid'
	},

	plugins: [
		tslint(),
		typescript({ clean: true })
	]
};
