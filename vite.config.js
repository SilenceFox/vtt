import { sveltekit } from '@sveltejs/kit/vite';
import { webSocketServer } from './webSocket.js';
/** @type {import('vite').UserConfig} */
const config = {
    server: {
        port: 3000
    },
    preview: {
        port: 3000
    },
    plugins: [sveltekit(), webSocketServer],
    vite: {
        resolve: {
            alias: {
                // Define your alias here
                $components: '/src/components',
            },
        },
        // other Vite options...
    },
};
export default config;
