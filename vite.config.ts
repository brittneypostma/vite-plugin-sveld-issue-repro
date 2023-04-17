import { sveltekit } from '@sveltejs/kit/vite';
import sveld from 'vite-plugin-sveld';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), sveld()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});
