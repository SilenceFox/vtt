export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/chat.svelte"),
	() => import("../../src/routes/dev.svelte"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"chat": [[0, 2], [1]],
	"dev": [[0, 3], [1]]
};