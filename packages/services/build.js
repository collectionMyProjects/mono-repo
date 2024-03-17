import esbuild from 'esbuild';
import pkg from './package.json' assert { type: 'json' };
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

const dev = process.argv.includes('--dev');
const minify = !dev;

const watch = process.argv.includes('--watch');

const config = {
	plugins: [vanillaExtractPlugin()],
};

const external = Object.keys({
	...pkg.dependencies,
	...pkg.peerDependencies,
});

const baseConfig = {
	entryPoints: ['src/index.ts'],
	bundle: true,
	minify,
	sourcemap: true,
	outdir: 'dist',
	target: 'es2019',
	watch,
	external,
	...config,
};

Promise.all([
	esbuild.build({
		...baseConfig,
		format: 'esm',
	}),
	esbuild.build({
		...baseConfig,
		format: 'cjs',
		outExtension: {
			'.js': '.cjs',
		},
	}),
]).catch((err) => {
	console.error('Build failed:', err);
	process.exit(1);
});
