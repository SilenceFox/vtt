/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: [
		'./src/**/*.svelte',
		'./src/lib/font.css' // Add this line
		// other paths to your files
	],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};
