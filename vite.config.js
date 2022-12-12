// @ts-nocheck
import { readdirSync } from 'node:fs';
import { defineConfig } from 'vite';

import customHMR from './plugins/vite-plugin-custom-hmr';

const input = readdirSync('.')
	.filter(file => file.endsWith('.html'))
	.reduce((result, file) => {
		const name = file.split('.')[0];

		return {
			...result,
			[name]: file
		};
	}, {});

export default defineConfig({
	build: {
		rollupOptions: {
			input
		}
	},
	server: {
		open: true,
		port: 1234
	},
	plugins: [customHMR()]
});
